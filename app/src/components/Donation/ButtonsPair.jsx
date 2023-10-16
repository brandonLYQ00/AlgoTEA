import classes from "../../style/ButtonsPair.module.css";

import {} from 'react-router-dom'

function ButtonsPair(props) {

  const {isActive} = props

  const handleCancel= ()=>{
    window.location.reload();

  }
  
  return (
    <section className={classes.buttons}>
      <button type="button" className={`btn ${classes.secondary_btn}` }
      onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" className={`btn  ${classes.primary_btn} ${isActive}`} onClick={props.callApplication}>
        Transfer Now
      </button>
    </section>
  );
}

export default ButtonsPair;
