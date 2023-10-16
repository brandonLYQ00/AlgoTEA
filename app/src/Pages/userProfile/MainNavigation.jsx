import { NavLink, useLocation } from "react-router-dom";
import classes from "../../style/MainNavigation.module.css";
import Logo from "../../Assets/logo.png";

function MainNavigation() {
  const currentPath = useLocation().pathname;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/profile/home">
          <img src={Logo} alt="" href="/profile/home" />
        </NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/profile/home"
              className={`${
                currentPath === "/profile/home" ? classes.active : ""
              } `}>
              <h4>Home</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/history"
              className={`${
                currentPath === "/profile/history" ? classes.active : ""
              } `}>
              <h4>Donation History</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={`${currentPath === "/profile" ? classes.active : ""}`}>
              <h4>Profile</h4>
            </NavLink>
          </li>
        </ul>

        <ul>
          <footer style={{ backgroundColor: "transparent" }}>
            <NavLink to={"/apply-donation/overview"}>
              <button>
                <p>Apply for Donation</p>
              </button>
            </NavLink>
          </footer>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
