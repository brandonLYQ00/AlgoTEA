
import classes from "../../style/DonateMonthly.module.css";import Amount from "./Amount";
import TermsCondition from "./TermsCondition";
import Contribute from "./Contribute";
import TotalDonation from "./TotalDonation";
import ButtonsPair from "./ButtonsPair";

import { useState } from "react";


function DonateOnce() {
  const [amount, setAmount] = useState(0);

  const [contributePercentage, setContributePercentage] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0);
  const [adminFee, setAdminFee] = useState(0);

  const handleAmount = (value) => {
    console.log(value, "value");
    setAmount(value);
    console.log(amount, "amount");
    setTotalDonation(value);
  };

  const handleIsAccept = (value) => {
    console.log(value);
  };

  const handleContribute = (value) => {
    console.log(value, "hi");
 
    let admFee = (value / 100) * amount;
    let totalDonation = amount - admFee;

    console.log(admFee, "admFee");
    console.log(totalDonation, "totalDonation");
    setAdminFee(admFee);
    setTotalDonation(totalDonation);
    setContributePercentage(value);
  };

  return (
    <>
      <main className={classes.main}>
        <Amount onInputChange={handleAmount}></Amount>

        <TermsCondition isAccept={handleIsAccept}></TermsCondition>

        <Contribute contribution={handleContribute}></Contribute>
      </main>
      <div className={classes.summary}>
        <TotalDonation
          donationAmount={amount}
          isMonthly={false}
          totalDonation={totalDonation}
          adminFee={adminFee}
          contributePercentage={contributePercentage}></TotalDonation>

        <ButtonsPair isActive={amount===0||amount.toString()===''? 'disabled':''}></ButtonsPair>
      </div>
    </>
  );
  }
  
  export default DonateOnce;
  