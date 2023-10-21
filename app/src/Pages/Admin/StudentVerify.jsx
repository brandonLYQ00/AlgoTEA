import ButtonsPair from "../../components/Donation/ButtonsPair";
import classes from "../../style/Admin/StudentVerify.module.css";
import Students from "../../db.json";
import { useState, useEffect } from "react";
import algosdk from 'algosdk';
import { useNavigate, useParams } from "react-router-dom";


const appIndex = 447864179;
const algod = new algosdk.Algodv2('','https://testnet-api.algonode.cloud', 443);


function StudentVerify() {
  const { id } = useParams();
  const [income, setIncome] = useState(0);
  const [siblings, setSiblings] = useState(0);
  const [ college, setCollegeDonation] = useState(0);
  const [ food, setFoodDonation] = useState(0);
  const [ other, setOtherDonation] = useState(0);
  const [total, setTotal] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [uni, setUni] = useState("");
  const [fac, setFac] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [ isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      for (const student of Students) {
        if (student.student_id === id) {
          setStudentName(student.name);
          setUni(student.institution);
          setFac(student.faculty);
          setEmail(student.email);
          setPhone(student.phone);
          checkLocalState(student.address_pera);
        }
      }
    } catch (e) {
      console.error("There was an error connecting to the database: ", e);
    }
  },[]);
  return (
    
    <div className={classes.main}>
      <div className={classes.card_outline}>
        <div className={`card ${classes.title}`}>
          <h3>{studentName}</h3>
          <div className="card-body">
            <div className={classes.card_container}>
              <div>
                <h5>Full Name</h5>
                <p>{studentName}</p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Student ID</h5>
                <p>{id}</p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>University</h5>
                <p>{uni}</p>
              </div>
              <div>
                <h5>Faculty</h5>
                <p>{fac}</p>
              </div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Contact</h5>
                <p>
                    <span><i className="fa-solid fa-envelope fa-lg ">  </i></span>
                    {" "}
                 {email}
                 </p>
                <p>
                <span><i className="fa-solid fa-phone fa-lg"></i></span>
                {" "}
                    {phone}
                    
                    </p>
              </div>
              <div></div>
            </div>


            <div className={classes.card_container}>
              <div>
                <h5>Net Income</h5>
                <p>
                 <input type="number" placeholder=" e.g -1000-2500" value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                 />
                 </p>
               
              </div>
              <div>
                <h5>Siblings</h5>
                <p><input type="number" placeholder=" e.g- 2" value={siblings}
                onChange={(e) => setSiblings(Number(e.target.value))}/></p>
              </div>
            </div>

           
          </div>
          <footer className={classes.summary}>
              <p>Amount Requested </p>
              <h2>
                {total} Algos <i className="fa-solid fa-pen fa-2xs" onClick={()=>{
                    navigate('/admin/edit-application/:id')

                }}></i>
              </h2>

              <div className={classes.summary_details}>
                <p>College fee</p>
                <p>{college} Algos</p>
              </div>

              <div className={classes.summary_details}>
                <p>Daily meals</p>
                <p>{food} Algos</p>
              </div>
              <div className={classes.summary_details}>
                <p>Others </p>
                <p>{other} Algos</p>
              </div>

              <div className={classes.button}>
                <ButtonsPair isAdmin={true}></ButtonsPair>
              </div>
            </footer>
        </div>
      </div>
    </div>
  );
  async function checkLocalState(addr) {
    try {
      const accountInfo = await algod.accountApplicationInformation(addr,appIndex).do();
      setIsShown(true);
      for (const key of accountInfo['app-local-state']['key-value']) {
        const keyName=Buffer.from(key.key,'base64').toString('ascii');
        if(keyName==="Donation Requested"){
          setTotal(key.value.uint/1000000);
        }
        if(keyName==="College"){
          setCollegeDonation(key.value.uint/1000000);
        }
        if(keyName==="Food"){
          setFoodDonation(key.value.uint/1000000);
        }
        if(keyName==="Other"){
          setOtherDonation(key.value.uint/1000000);
        }
        // if(keyName==="Donation Received"){
        //   setTotalDonationReceived(key.value.uint/1000000);
        // }
      }
      
    } catch (e) {
      setIsShown(false);
      console.error('There was an error connecting to the algorand node: ', e)
    }
  }
}

export default StudentVerify;
