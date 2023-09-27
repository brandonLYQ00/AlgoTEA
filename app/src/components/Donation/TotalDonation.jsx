import classes from "../../style/TotalDonation.module.css";

function TotalDonation(props) {
  const { donationAmount, isMonthly } = props;
  return (
    <section className={classes.total_amount}>
      <h5>Total Donation</h5>
      <strong>{donationAmount ?? `${"- - -"}`}</strong>
      <br />
      <div className={classes.bills}>
        <div className={classes.moreInfo}>
          <small>Admin fee amount</small>
          <small>- - -</small>
        </div>

        {isMonthly ? (
          <div className={classes.moreInfo}>
            <small>Next bill</small>
            <small>- - -</small>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default TotalDonation;
