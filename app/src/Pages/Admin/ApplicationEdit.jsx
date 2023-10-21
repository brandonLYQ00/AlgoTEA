import classes from "../../style/Admin/ApplicationEdit.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationEdit() {

    const navigate = useNavigate();
  const data = {
    total: 3000,
    collegeFee: 2000,
    dailyMeals: 600,
    others: 400,
  };

  const [collegeFee, setCollegeFee] = useState(data.collegeFee);
  const [dailyMeal, setDailyMeal] = useState(data.dailyMeals);
  const [otherExpenses, setOtherExpenses] = useState(data.others);
  const [total, setTotal] = useState(data.total);

  return (
    <div className={classes.main}>
      <div className={classes.card_outline}>
        <div className={`card ${classes.title}`}>
          <h3>Application Request Information</h3>
          <div className="card-body">
            <div className={classes.card_container}>
              <div>
                <h5>College fee</h5>
                <p>
                  <input
                    type="number"
                    value={collegeFee === 0 ? "" : collegeFee}
                    onChange={(e) => setCollegeFee(Number(e.target.value))}
                  />{" "}
                </p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Daily meals</h5>
                <p>
                  <input
                    type="number"
                    value={dailyMeal === 0 ? "" : dailyMeal}
                    onChange={(e) => {
                      setDailyMeal(Number(e.target.value));
                    }}
                  />
                </p>
              </div>
              <div></div>
            </div>

            <div className={classes.card_container}>
              <div>
                <h5>Other expenses</h5>
                <p>
                  <input
                    type="number"
                    value={otherExpenses === 0 ? "" : otherExpenses}
                    onChange={(e) => {
                      setOtherExpenses(Number(e.target.value));
                    }}
                  />
                  <p className={classes.disclaimer}>
                    This includes stationary, transportation etc.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className={classes.summary}>
          <p>Amount Eligible </p>
          <h2>
            {collegeFee || dailyMeal || otherExpenses
              ? parseFloat(collegeFee) +
                parseFloat(dailyMeal) +
                parseFloat(otherExpenses)
              : "- - -"}{" "}
            Algos
          </h2>

          <button
            className={`btn ${
              collegeFee === 0 || dailyMeal === 0 || otherExpenses === 0
                ? "disabled"
                : ""
            }`}
            onClick={()=>{
                navigate('/admin/home')
            }}>
            Save Amount
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ApplicationEdit;
