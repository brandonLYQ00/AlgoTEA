import { useState, useEffect } from "react";
import classes from "../../style/TotalDonation.module.css";

function TotalDonation(props) {
  const {
    donationAmount,
    isMonthly,
    totalDonation,
    adminFee,
    contributePercentage,
  } = props;

  // const [totalDonation, setTotalDonation] = useState(null);
  // const [adminFee , setAdminFee] = useState(null);
  // const amount = `Algo ${donationAmount}`
  // let totalDonation = '';
  // let adminFee= '';

  // adminFee = (contributePercentage/100)*donationAmount;
  // setAdminFee((contributePercentage/100)*donationAmount)
  // // totalDonation = donationAmount-adminFee;
  // setTotalDonation(donationAmount-adminFee)
  // console.log(adminFee,'adminFee');
  // console.log(totalDonation,'adminFee');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [nextMonthDate, setNextMonthDate] = useState(null);

  useEffect(() => {
    // Calculate the next month date when the component mounts or currentDate changes
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    setNextMonthDate(nextMonth);
  }, [currentDate]);

  const formatDate = (date) => {
    return date.toLocaleString("en-US", { day: "numeric", month: "short" });
  };

  return (
    <section className={classes.total_amount}>
      <h5>Total Donation</h5>
      <h4>
        <strong>
          {donationAmount === 0 || donationAmount.toString() === ""
            ? `${"- - -"}`
            : `Algo ${totalDonation}`}
        </strong>
      </h4>
      <br />
      <div className={classes.bills}>
        <div className={classes.moreInfo}>
          <small>
            Admin fee{" "}
            {contributePercentage === 0 ||
            contributePercentage.toString() === ""
              ? `%`
              : `${contributePercentage}%`}
          </small>
          <small>
            {adminFee === 0 || adminFee.toString() === ""
              ? `${"- - -"}`
              : `Algo ${adminFee}`}
          </small>
        </div>

        {isMonthly ? (
          <div className={classes.moreInfo}>
            <small>Next bill</small>
            <small>
              {donationAmount === 0
                ? `${"- - -"}`
                : `${nextMonthDate && formatDate(nextMonthDate)}`}{" "}
            </small>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default TotalDonation;
