import LandingPageRight from "./LandingPageRightUI";
// import Logo from "../Assets/logo-1.png";
// import LogoName from "../Assets/logo-name.png";

import classes from "../style/LandingPageLeft.module.css";


function LandingLeft() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.left}>
          <div className={classes.logoClm}>
            <div className={classes.logoName} style={{ height: "5rem" }}>
              AlgoTEA
              {/* <img src={Logo} alt="" />
              <img src={LogoName} alt="logoName" className={classes.algotea} /> */}
            </div>

            <div className={classes.box} style={{ backgroundColor: "#6FFCD2" }}>
              <p>“It gives me updates on the my donation. So reliable!”</p>

              <p>
                <i>Puman,</i>
              </p>
              <p>
                <i>AlgoTEA donor</i>
              </p>
            </div>

            <div
              className={classes.box}
              style={{ backgroundColor: "#152520", color: "white" }}>
              <p>
                “I got prohibited from taking exams due to my overdue pending
                fee. My part-time job only supports my daily expenses. I felt
                hopeless thinking I had to terminate my study after so much hard
                work. Thank you for the donors who brought light to my dreams.”
              </p>

              <p>
                <i>Anonymous,</i>
              </p>
              <p>
                <i>Business Admin major</i>
              </p>
            </div>

            <div className={classes.box} style={{ fontSize: "12px" }}>
              <p>2023 AlgoTEA - All rights reserved</p>
            </div>
          </div>
          <div className={classes.logoClm} style={{ marginTop: "0px" }}>
            <div
              className={classes.box}
              style={{ backgroundColor: "#152520", color: "white" }}>
              <p>“I can now study without worrying about the next meal.”</p>

              <p>
                <i>Jason,</i>
              </p>
              <p>
                <i>Architecture major</i>
              </p>
            </div>{" "}
            <div
              className={classes.box}
              style={{ height: "300px", backgroundColor: "#E5E5E5" }}>
              <p>
                “AlgoTEA has made it effortlessly easier to donate to students
                in need. The signup process is a no hassle too!”
              </p>

              <p>
                <i>Ms Amirah Jusuf,</i>
              </p>
              <p>
                <i>Devoted AlgoTEA donor </i>
              </p>
              <p>
                <i>for 2 years. </i>
              </p>
            </div>{" "}
            <div
              className={classes.box}
              style={{ height: "200px", backgroundColor: "#6FFCD2" }}></div>
          </div>
        </div>
<LandingPageRight></LandingPageRight>
      </main>
    </>
  );
}

export default LandingLeft;
