import classes from "../../style/ButtonsPair.module.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function ButtonsPair(props) {
  const { isActive, isAdmin } = props;

  const navigate = useNavigate();

  const url = "/profile/home";
  const url2 = "/admin/home";

  return (
    <section className={classes.buttons}>
      <Link to={isAdmin ? url2 : url}>
        <button
          type="button"
          className={`btn  ${
            isAdmin ? classes.secondary_btn_admin : classes.secondary_btn
          }`}
          onClick={() => {
            if (isAdmin) {
              navigate("/admin/home");
            }else{

            }
          }}>
          {isAdmin ? "Reject" : "Cancel"}
        </button>
      </Link>
      <button
        type="button"
        className={`btn  ${classes.primary_btn} ${isActive}`}
        onClick={() => {
          if (isAdmin) {
            navigate("/admin/home");
          } else {
            props.callApplication();
          }
        }}>
        {isAdmin ? "Approve" : "Transfer Now"}
      </button>
    </section>
  );
}

export default ButtonsPair;
