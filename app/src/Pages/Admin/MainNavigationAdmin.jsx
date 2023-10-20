import { NavLink, useLocation } from "react-router-dom";
import classes from "../../style/MainNavigation.module.css";
import Logo from "../../Assets/logo.png";

function MainNavigationAdmin() {
  const currentPath = useLocation().pathname;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/admin/home">
          <img src={Logo} alt="" href="/admin/home" />
        </NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin/home"
              className={`${
                currentPath === "/admin/home" ? classes.active : ""
              } `}>
              <h4>Home</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/history"
              className={`${
                currentPath === "/admin/history" ? classes.active : ""
              } `}>
              <h4>Donation History</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/profile"}
              className={`${currentPath === "/admin/profile" ? classes.active : ""}`}>
              <h4>Profile</h4>
            </NavLink>
          </li>
        </ul>

        <ul>
          <footer style={{ backgroundColor: "transparent" }}>
            <NavLink to={"/apply-donation/overview"}>
              <button>
                <p>Contact Support</p>
              </button>
            </NavLink>
          </footer>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationAdmin;
