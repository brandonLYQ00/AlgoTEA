import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../style/DonationInfo.module.css";

function DonationInfo() {
  const [collegeFee, setCollegeFee] = useState(0);
  const [dailyMeal, setDailyMeal] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);

  const navigate = useNavigate();

  const handleCollegeFee = (e) => {
    setCollegeFee(e.target.value);
  };

  const handleDailyExpenses = (e) => {
    setDailyMeal(e.target.value);
  };

  const handleOtherExpenses = (e) => {
    setOtherExpenses(e.target.value);
  };

  const handleContinue = () => {
    // Calculate the total
    const total =
      parseFloat(collegeFee) +
      parseFloat(dailyMeal) +
      parseFloat(otherExpenses);

    // Check if any input field is empty
    if (!collegeFee || !dailyMeal || !otherExpenses) {
      alert("Please fill in all input fields.");
    } else {
      // All input fields are filled
      console.log("Total Request:", total);

      // You can navigate to the next page here if needed
       navigate('/apply-donation/success');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className={classes.main}>
      <section className={classes.request_form}>
        <i className="fa-solid fa-chevron-left" onClick={handleBack}>
          {" "}
          Back
          <div className={classes.honest}>
            <strong>Your spending will be tracked and verified.</strong>
            <p className={classes.disclaimer}>
              please enter an honest amount to avoid losing donor's trust
            </p>
          </div>
        </i>

        <div className={classes.request_card}>
          <div className={` `}>
            <h2>Donation Request Information</h2>

            <div className={classes.request_content}>
              <p>College Fee</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                onChange={handleCollegeFee}
                value={collegeFee}
              />
              <p>Daily meals</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                onChange={handleDailyExpenses}
                value={dailyMeal}
              />
              <p>Other expenses</p>
              <input
                required
                type="number"
                placeholder="Enter an amount e.g 500"
                onChange={handleOtherExpenses}
                value={otherExpenses}
              />
              <p className={classes.disclaimer}>
                This includes stationary, transportation etc.
              </p>
            </div>
          </div>
          <div className={classes.bottom}>
            <p>Total Request</p>
            <p>
              {collegeFee || dailyMeal || otherExpenses
                ? parseFloat(collegeFee) +
                  parseFloat(dailyMeal) +
                  parseFloat(otherExpenses)
                : "- - -"}
            </p>
            <div className={`${classes.personal_button}`}>
              <button onClick={handleContinue}>Continue</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DonationInfo;
