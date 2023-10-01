
import classes from "../../style/DonateMonthly.module.css";import Amount from "./Amount";
import TermsCondition from "./TermsCondition";
import Contribute from "./Contribute";
import TotalDonation from "./TotalDonation";
import ButtonsPair from "./ButtonsPair";

import { useState } from "react";


function DonateOnce(props) {
  const [amount, setAmount] = useState(0);

  const [contributePercentage, setContributePercentage] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0);
  const [adminFee, setAdminFee] = useState(0);

  const handleAmount = (value) => {
    setAmount(value);
    setTotalDonation(value);
  };

  const handleIsAccept = (value) => {
  };

  const handleContribute = (value) => { 
    let admFee = (value / 100) * amount;
    let totalDonation = amount - admFee;
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

        <ButtonsPair isActive={amount===0||amount.toString()===''? 'disabled':''} callApplication={async ()=>{
          await props.callApplication('', amount);
          }}></ButtonsPair>
      </div>
    </>
  );
  }
  
  export default DonateOnce;
  