import classes from "../style/HomeCard.module.css";
import grad from "../Assets/graduation-cap.png";
import others from "../Assets/stationary 1.png";
import foods from "../Assets/fast-food.png";
import Category from "./BreakDownCategory";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <>
      <div className={` ${classes.donation_card}`}>
        <section className={classes.request_box}>
          <div className={classes.request_paragraph}>
            <h1>Student N</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              animi est nemo laboriosam doloremque, id ex facilis minima
              voluptates perspiciatis soluta consequatur qui odio, suscipit ipsa
              quod officia, distinctio tempore.
            </p>
          </div>

         <Link to={'/profile/home/donation-form'}>
         <button type="button" className={`btn  ${classes.primary_btn} `}>
            Donate
          </button>
         </Link>
        </section>

        <section className={classes.details}>
          <h2>Budget breakdown</h2>
          <div className={classes.catagories}>
            <Category desc={"College fee"} amount={1000}>
              <img src={grad} alt="" />
            </Category>
            <Category desc={"Other"} amount={1000}>
              <img src={others} alt="" />
            </Category>
            <Category desc={"Food & drink"} amount={1000}>
              <img src={foods} alt="" />
            </Category>
          </div>
          <div className={classes.donation_needed}>
            <h3>Donation needed</h3>
            <h2>RM 5000</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeCard;
