import { NavLink } from "react-router-dom";
import classes from "../../style/MainNavigation.module.css";
import Logo from '../../Assets/logo.png'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/profile/home">
          <img src={Logo} alt="" href="/profile/home"/>
        </NavLink>
      </div>
      
      <nav>
        <ul>
          <li>
            <NavLink to="/profile/home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile/history" style={{ color: "black" }}>Donation History</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} style={{ color: "black" }}>Profile</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to={'/apply-donation/overview'}>
              <button><p>Apply for Donation</p></button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
