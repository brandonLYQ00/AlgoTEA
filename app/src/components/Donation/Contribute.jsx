import { useState,useRef } from "react";
import classes from "../../style/Contribute.module.css";
import ContributionPercentage from "../Contribution";

function Contribute(props) {

  const [selectedPercentage , setSelectedPercentage]= useState(null);
  const inputAmount = useRef('');
  
  const handleContributionButton = (value)=>{
    inputAmount.current.value = null;
    setSelectedPercentage(value)
    props.contribution(value)
  }

  const handleInput =  ()=>{
    setSelectedPercentage(null);
    const newValue = inputAmount.current.value;
    props.contribution(newValue)
  }
  return (
    <section className={classes.contribute}>
      <h5>Contribute to AlgoTEA</h5>
      <div className={classes.contribution}>
        {[1, 1.5, 2, 2.5].map((percentage) => (
          <ContributionPercentage
           key={percentage}
           selected={selectedPercentage===percentage}
            onClick={()=>{
              handleContributionButton(percentage)
            }}
            >
              {`${percentage}%`}
              </ContributionPercentage>
        ))}
      
      </div>
      <input type="number" placeholder="Enter a percentage" ref={inputAmount} onChange={handleInput}/>

      <p>Your donation will help the team maintain the service</p>
    </section>
  );
}

export default Contribute;
