import classes from "../../style/DonateMonthly.module.css";

import Amount from "./Amount";
import TermsCondition from "./TermsCondition";
import Contribute from "./Contribute";
import TotalDonation from "./TotalDonation";
import ButtonsPair from "./ButtonsPair";

import { useState } from "react";

function DonateMonthly() {
  const [amount, setAmount] = useState(null);

  const handleAmount = (value) => {
    console.log(value);
    // amount.current.value = value;
    setAmount(value);
    console.log(amount);
  };

  const handleIsAccept = (value) => {
    console.log(value);
  };

  const handleContribute = (value) => {
    console.log(value, "hi");
  };

  return (
    <>
      <main className={classes.main}>
        <Amount onInputChange={handleAmount}></Amount>

        <TermsCondition isAccept={handleIsAccept}></TermsCondition>

        <Contribute contribution={handleContribute}></Contribute>
      </main>
      <div className={classes.summary}>
        <TotalDonation donationAmount={amount} isMonthly={true}></TotalDonation>

        <ButtonsPair></ButtonsPair>
      </div>
    </>
  );
}

export default DonateMonthly;
