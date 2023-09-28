
import { Link } from "react-router-dom";
import classes from "../../style/MainNavigation.module.css";
import Logo from '../../Assets/logo-1.png'
import LogoName from '../../Assets/logo-name.png'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <img src={Logo} alt="" />
      <img src={LogoName} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/profile/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile/history"}>Donation History</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>
              <button><p>Apply for Donation</p></button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
