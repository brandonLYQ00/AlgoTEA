import classes from "../../style/ButtonsPair.module.css";
import { Link } from "react-router-dom";

import {} from 'react-router-dom'

function ButtonsPair(props) {

  const {isActive} = props

  
  
  return (
    <section className={classes.buttons}>
      <Link to="/profile/home">
      <button type="button" className={`btn ${classes.secondary_btn}` }
      >
        Cancel
      </button>
      </Link>
      <button type="button" className={`btn  ${classes.primary_btn} ${isActive}`} onClick={props.callApplication}>
        Transfer Now
      </button>
    </section>
  );
}

export default ButtonsPair;
