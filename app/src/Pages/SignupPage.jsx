import classes from "../style/SignupPage.module.css";
import Logo from'../assets/logo-1.png'
import LogoName from '../assets/logo-name.png'
import { Link } from "react-router-dom";


function SignUpPage() {
  return (
    <main >
      <div className={classes.container}>
        <div className={classes.image}>
          <h1 className={classes.logo}>
            <img src={Logo} alt="" />
            <img src={LogoName} alt="" />
          </h1>
          <div className={classes.words}>
            <h1>Amplify your impact, one secure donation at a time.</h1>
            <h1>Protect your kindness, share your love</h1>
            <h1>
              Your generosity, fortified by blockchain, is a gift that keeps on
              giving.
            </h1>
            <h1> Making your donations both secure and accountable</h1>
          </div>
        </div>
        <div className={classes.forms}>
          <h3>Building one future leader at a time</h3>
          <form action="">
            <div >
              <label htmlFor="exampleFormControlInput1" className="form-label" >
               First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // placeholder="name@example.com"

              />
            </div>

            <div >
              <label htmlFor="exampleFormControlInput1" className="form-label">
               Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // placeholder="name@example.com"
              />
            </div>
            <div >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                // placeholder="name@example.com"
              />
            </div>
            <div >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number 
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="+60-0125986653"

              />
            </div>
            <div className={classes.button}>
          <Link to={'/profile/home'}>
          <button type="button" className="btn" >
              SignUp Now
            </button></Link>
            <div>
            <p>By signing up, you agree to our terms & conditions.</p>
        </div>
         
        </div>

       
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
