import ButtonsPair from "../../components/Donation/ButtonsPair";
import classes from "../../style/Admin/StudentVerify.module.css";

import { useNavigate } from "react-router-dom";

function StudentVerify() {

    const navigate = useNavigate();



    
  return (
    <div className={classes.main}>
      <div className={classes.card_outline}>
        <div className={`card ${classes.title}`}>
          <h3>Student N</h3>
          <div className="card-body">
            <div className={classes.card_container}>
              <div>
                <h5>Full Name</h5>
                <p>Student N Werty</p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Student ID</h5>
                <p>A19EC25523</p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>University</h5>
                <p>University Tenaga Nasional</p>
              </div>
              <div>
                <h5>Faculty</h5>
                <p>Faculty of Computing</p>
              </div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Contact</h5>
                <p>
                    <span><i class="fa-solid fa-envelope fa-lg ">  </i></span>
                    {" "}
                 email12@gmail.com
                 </p>
                <p>
                <span><i class="fa-solid fa-phone fa-lg"></i></span>
                {" "}
                    +6014589856
                    
                    </p>
              </div>
              <div></div>
            </div>


            <div className={classes.card_container}>
              <div>
                <h5>Net Income</h5>
                <p>
                 <input type="number" placeholder=" e.g -1000-2500"/>
                 </p>
               
              </div>
              <div>
                <h5>Siblings</h5>
                <p><input type="number" placeholder=" e.g- 2" /></p>
              </div>
            </div>

           
          </div>
          <footer className={classes.summary}>
              <p>Amount Requested </p>
              <h2>
                3000 Algos <i class="fa-solid fa-pen fa-2xs" onClick={()=>{
                    navigate('/admin/edit-application/:id')

                }}></i>
              </h2>

              <div className={classes.summary_details}>
                <p>College fee</p>
                <p>2000 Algos</p>
              </div>

              <div className={classes.summary_details}>
                <p>Daily meals</p>
                <p>600 Algos</p>
              </div>
              <div className={classes.summary_details}>
                <p>Others </p>
                <p>400 Algos</p>
              </div>

              <div className={classes.button}>
                <ButtonsPair isAdmin={true}></ButtonsPair>
              </div>
            </footer>
        </div>
      </div>
    </div>
  );
}

export default StudentVerify;
