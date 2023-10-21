import classes from "../style/HomeCard.module.css";
import grad from "../Assets/graduation-cap.png";
import others from "../Assets/stationary 1.png";
import foods from "../Assets/fast-food.png";
import Category from "./BreakDownCategory";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import algosdk from 'algosdk';


const appIndex = 441810453;
const algod = new algosdk.Algodv2('','https://testnet-api.algonode.cloud', 443);

function HomeCard(props) {
  const [ college, setCollegeDonation] = useState(0);
  const [ food, setFoodDonation] = useState(0);
  const [ other, setOtherDonation] = useState(0);
  const [ totalDonation, setTotalDonation] = useState(0);
  // const [ totalDonationReceived, setTotalDonationReceived] = useState(0);
  const [ isShown, setIsShown] = useState(false);
  const { student , isAdmin } = props;
  const url=`/profile/home/donation-form/${student.student_id}`;
  const url2=`/admin/verify/${student.student_id}`;
  useEffect(() => {
    checkLocalState(student.address_pera)
  },[]);
  return (
    <>

  


    {
      isShown  ? <div className={`${classes.donation_card} `}>
      <section className={classes.request_box}>
        <div className={classes.request_paragraph}>
          <h1>{student.name}</h1>
          <p>
            Student ID: {student.student_id}
          </p>
          <p>
            Institute: {student.institution}
          </p>
        </div>

       <Link to={isAdmin?url2:url} >
       <button type="button" className={`btn  ${classes.primary_btn} `}>
          { isAdmin?'verify':'Donate'}
        </button>
       </Link>
      </section>
      <section className={classes.details}>
        <h4>Budget breakdown</h4>
        <div className={classes.catagories}>
          <Category desc={"College fee"} amount={college}>
            <img src={grad} alt="" />
          </Category>
          <Category desc={"Other"} amount={other}>
            <img src={others} alt="" />
          </Category>
          <Category desc={"Food & drink"} amount={food}>
            <img src={foods} alt="" />
          </Category>
        </div>

        <div className={classes.donation_needed}>
          <h3>Donation needed</h3>
          <h2>{totalDonation} Algos</h2>
          {/* <h3>Donation received</h3>
          <h2>{totalDonationReceived} Algos</h2> */}
        </div>
      </section>
    </div> 
    : <>
    </>
    }
      
    </>
  );
  async function checkLocalState(addr) {
    const accountInfo = await algod.accountApplicationInformation(addr,appIndex).do();
    setIsShown(true);
    for (const key of accountInfo['app-local-state']['key-value']) {
      const keyName=Buffer.from(key.key,'base64').toString('ascii');
      if(keyName==="Donation Requested"){
        setTotalDonation(key.value.uint/1000000);
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
  }
}

export default HomeCard;
