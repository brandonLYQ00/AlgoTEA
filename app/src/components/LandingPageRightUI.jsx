import classes from "../style/LandingPageRight.module.css";
import { Link } from "react-router-dom";

function LandingPageRight() {
  return (
    <>
      <div className={classes.right}>
        <div className={`${classes.admin} ${classes.button}`}>
          <Link to={"/admin/sign-in"}>
            <button type="button" className={`btn`}>
              Admin Login
            </button>
          </Link>
        </div>

        <div className={classes.title}>
          <h1>Unlock Potential,</h1>
          <h1>Support Our</h1>
          <h1 className={classes.subtitle}>Future Leaders</h1>
        </div>

        <div className={classes.smallTitleOne}>
          <h3> Building one future leader at a time</h3>
        </div>

        <div className={classes.smallTitleTwo}>
          <h3>Secure your donation with Blockchain technology</h3>
          <h3>Donation Security via Blockchain</h3>
          <h3>Elevate Giving with Blockchain</h3>
        </div>

        <div className={classes.sponsorsSignup}>
          <div className={classes.sponsors}>
            <p>In collaboration with</p>
            <div className={classes.img}>
              <img
                src="https://perawallet.s3-eu-west-3.amazonaws.com/media-kit/pera-logo-black.png"
                alt="perawallet"
              />
              <img
                src="https://www.blockchain.uzh.ch/wp-content/uploads/Algorand-Crypto-Logo.png"
                alt="algorant"
              />
            </div>
          </div>

          <div className={classes.button}>
            <Link to={"/signup"}>
              <button type="button" className="btn">
                SignUp Now
              </button>
            </Link>
            <div className={classes.p}>
              <p>Already has an account? Sign in here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageRight;
