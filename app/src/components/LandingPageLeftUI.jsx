import LandingPageRight from "./LandingPageRightUI";
// import Logo from "../assets/logo-1.png";
// import LogoName from "../assets/logo-name.png";
import classes from "../style/LandingPageLeft.module.css";
import Logo from '../assets/logo.png'


function LandingLeft() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.left}>
          <div className={classes.logoClm}>
            <div className={classes.logoName}>
              <img src={Logo} alt="" />
            </div>

            <div className={classes.box} style={{ backgroundColor: "#6FFCD2" }}>
              <p>“It gives me updates on the my donation. So <b>reliable</b>!”</p>
             
              <p style={{ fontSize: "14px", margin: "0px"}}>
                <i>Puman</i>
                <br></br>
                <i>AlgoTEA donor</i>
              </p>
            </div>

            <div className={classes.box} style={{ backgroundColor: "#152520", color: "white" }}>
              <p>
                “<b>I got prohibited from taking exams</b> due to my overdue pending
                fee. My part-time job only supports my daily expenses. 
                <br></br>
                <br></br>
                I felt <b>hopeless</b> thinking I had to terminate my study after so much hard
                work. Thank you for the donors who <b>brought light to my dreams</b>.”
              </p>
             
              <p style={{ fontSize: "14px", margin: "0px"}}>
                <i>Anonymous</i>
                <br></br>
                <i>Business Admin major</i>
              </p>
            </div>

            <div className={classes.box.footnote} style={{ textAlign: "center", fontSize: "12px", marginLeft: "0px", padding: "0px" }}>
              <p>2023 AlgoTEA - All rights reserved</p>
            </div>
          </div>

          <div className={classes.logoClm} style={{ marginTop: "0px" }}>
            <div className={classes.box} style={{ backgroundColor: "#152520", color: "white" }}>
              <p>“I can now study without <b>worrying about the next meal</b>.”</p>
             
              <p style={{ fontSize: "14px", margin: "0px"}}>
                <i>Jason</i>
                <br></br>
                <i>Architecture major</i>
              </p>
            </div>

            <div className={classes.box} style={{ verticalAlign: "center", height: "325px", backgroundColor: "#E5E5E5" }}>
              <p>
                “AlgoTEA has made it <b>effortlessly easier</b> to donate to students in need. 
                <br></br>
                <br></br>
                The signup process is a <b>no hassle</b> too!”
              </p>

              <p style={{ fontSize: "14px", margin: "0px"}}>
                <i>Ms Amirah Jusuf</i>
                <br></br>
                <i>Devoted AlgoTEA donor for 2 years</i>
              </p>
            </div>

            <div className={classes.box} style={{ backgroundColor: "#6FFCD2" }}>
               <p>
                “I have tried other platforms before but it was confusing. The process always seems sketchy too. 
                <br></br> 
                I am <b>glad to try this out</b>.
              </p>

              <p style={{ fontSize: "14px", margin: "0px"}}>
                <i>Kuku Anak Pansuri</i>
                <br></br>
                <i>AlgoTEA donor</i>
              </p>
            </div>
          </div>
        </div>
      <LandingPageRight></LandingPageRight>
      </main>
    </>
  );
}

export default LandingLeft;
