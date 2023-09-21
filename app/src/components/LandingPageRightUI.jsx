import classes from "../style/LandingPageRight.module.css";

function LandingPageRight() {
  return (
    <>
      <div className={classes.title}>
        <h1>Unlock Potential,</h1>
        <h1>Support Our</h1>
        <h1 className={classes.subtitle}>Future Leaders</h1>
      </div>
      <div className={classes.smallTitleOne}>
        <h3> Building one future leader at a time</h3>
      </div>
      <div className={classes.smallTitleTwo}>
        <h3>Secure your donation with blockchain technology</h3>
        <h3>Secure your donation with blockchain technology</h3>
        <h3>Secure your donation with blockchain technology</h3>
      </div>
      <footer >
        <div className={classes.sponsors}>
          <div>
            <h4>In collaboration with</h4>
          </div>
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
            <button type="button" class="btn">SignUp Now</button>
            <div>
            <p>Already has an account? Sign in here</p>
        </div>
        </div>
       
       
      </footer>
    </>
  );
}

export default LandingPageRight;
