import classes from "../../style/ButtonsPair.module.css";

function ButtonsPair(props) {

  const {isActive} = props

  const handleCancel= ()=>{
    window.location.reload();
  }
  
  return (
    <section className={classes.buttons}>
      <button type="button" className={`btn ${classes.secondary_btn} ${isActive}` }
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
