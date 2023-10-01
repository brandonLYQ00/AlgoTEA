import classes from "../style/HomeCard.module.css";
import grad from "../Assets/graduation-cap.png";
import others from "../Assets/stationary 1.png";
import foods from "../Assets/fast-food.png";
import Category from "./BreakDownCategory";
import { Link } from "react-router-dom";

function HomeCard(props) {
  const { student } = props;
  const total=student.fee_tuition+student.fee_others+student.fee_meals;
  const url=`/profile/home/donation-form/${student.student_id}`;
  return (
    <>
      <div className={`${classes.donation_card} `}>
        <section className={classes.request_box}>
          <div className={classes.request_paragraph}>
            <h1>Name: {student.name}</h1>
            <p>
              Student ID: {student.student_id}
            </p>
            <p>
              Wallet Address: {student.address_pera}
            </p>
            <p>
              Institute: {student.institution}
            </p>
          </div>

         <Link to={url}>
         <button type="button" className={`btn  ${classes.primary_btn} `}>
            Donate
          </button>
         </Link>
        </section>

        <section className={classes.details}>
          <h2>Budget breakdown</h2>
          <div className={classes.catagories}>
            <Category desc={"College fee"} amount={student.fee_tuition}>
              <img src={grad} alt="" />
            </Category>
            <Category desc={"Other"} amount={student.fee_others}>
              <img src={others} alt="" />
            </Category>
            <Category desc={"Food & drink"} amount={student.fee_meals}>
              <img src={foods} alt="" />
            </Category>
          </div>
          <div className={classes.donation_needed}>
            <h3>Donation needed</h3>
            <h2>{total} Algos</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeCard;
