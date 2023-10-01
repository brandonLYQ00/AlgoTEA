import { Link } from "react-router-dom";
import classes from "../../style/MainNavigation.module.css";
import Logo from '../../assets/logo.png'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to={"/profile/home"}>
          <img src={Logo} alt="" href="/profile/home"/>
        </Link>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link to={"/profile/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile/history"} style={{ color: "black" }}>Donation History</Link>
          </li>
          <li>
            <Link to={"/profile"} style={{ color: "black" }}>Profile</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to={'/apply-donation/overview'}>
              <button><p>Apply for Donation</p></button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
