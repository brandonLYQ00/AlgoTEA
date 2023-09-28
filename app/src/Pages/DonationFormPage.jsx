

import { useState } from "react";
import classes from "../style/Donation.module.css";
import DonateMonthly from "../components/Donation/DonateMonthly";
import DonateOnce from "../components/Donation/DonateOnce";



function DonationFormPage() {
    const [isMonthlySelected, setMonthlySelected] = useState(true);
    const [isOnceSelected, setOnceSelected] = useState(false);
  
    const handleMonthly = () => {
      setMonthlySelected(true);
      setOnceSelected(false);
    };
  
    const handleOnce = () => {
      setMonthlySelected(false);
      setOnceSelected(true);
    };
  
    const monthlyButtonStyle = {
      backgroundColor: isMonthlySelected ? "#6FFCD2" : "#a0b4ae4e",
    };
  
    const onceButtonStyle = {
      backgroundColor: isOnceSelected ? "#6FFCD2" : "#a0b4ae4e",
    };
  
    return (
      <>
        <main className={`${classes.main}`}>
          <div className={`card ${classes.card_measure}`}>
            <div className={`card-body ${classes.card_body_props}`}>
              <div className={`${classes.options}`}>
                <div className={classes.button} onClick={handleMonthly}>
                  <button type="button" className="btn" style={monthlyButtonStyle}>
                    Donate Monthly
                  </button>
                </div>
                <div className={classes.button} onClick={handleOnce}>
                  <button type="button" className="btn" style={onceButtonStyle}>
                    Donate Once
                  </button>
                </div>
              </div>
  
              {
                isMonthlySelected===true? <DonateMonthly></DonateMonthly>: <DonateOnce></DonateOnce>
              }
             
            </div>
          </div>
        </main>
      </>
    );
}

export default DonationFormPage;
