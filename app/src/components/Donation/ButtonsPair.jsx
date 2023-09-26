import classes from "../../style/ButtonsPair.module.css";

function ButtonsPair() {
  return (
    <section className={classes.buttons}>
      <button type="button" className={`btn ${classes.secondary_btn}`}>
        Cancel
      </button>
      <button type="button" className={`btn  ${classes.primary_btn}`}>
        Transfer Now
      </button>
    </section>
  );
}

export default ButtonsPair;
