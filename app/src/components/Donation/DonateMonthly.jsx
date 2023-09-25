import React from "react";
import classes from "../../style/DonateMonthly.module.css";
import ContributionPercentage from "../Contribution";

function DonateMonthly() {
  return (
    <main className={classes.main}>
      <section className={classes.amount}>
        <h5>Amount to donate</h5>
        <div className={classes.inputArea}>
          <p>Algorand</p>
          <input type="text" placeholder="ALGO" />
        </div>
      </section>

      <section className={classes.terms_condition}>
        <h5>Is this donation for education fee only?</h5>
        <div className={classes.checkbox}>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            Yes, I'd like to donate for education fee only.
          </label>
        </div>
      </section>

      <section className={classes.contribute}>
        <h5>Contribute to AlgoTEA</h5>
        <div className={classes.contribution}>
          {[1, 1.5, 2, 2.5].map((percentage) => (
            <ContributionPercentage
              key={percentage}>{`${percentage}%`}</ContributionPercentage>
          ))}
          <input type="text" placeholder="Enter an amount" />
        </div>
        <p>Your donation will help the team maintain the service</p>
      </section>

      <section className={classes.total_amount}>
        <h5>Total Donation</h5>
        <strong>DONATION AMOUNT</strong>
        <br />
        <small>Admin fee amount</small>
      </section>

      <section className={classes.buttons}>
        <button type="button" className={`btn ${classes.secondary_btn}`}>
          Cancel
        </button>
        <button type="button" className={`btn  ${classes.primary_btn}`}>
          Transfer Now
        </button>
      </section>
    </main>
  );
}

export default DonateMonthly;
