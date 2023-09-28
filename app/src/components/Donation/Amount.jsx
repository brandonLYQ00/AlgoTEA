import { useRef,  } from "react";
import classes from "../../style/Amount.module.css";

function Amount(props) {
  
  const amount = useRef(0);
  

  const handleInputChange = () => {
    const newValue = amount.current.value;
    
    props.onInputChange(newValue)

  };
  return (
    <section className={classes.amount}>
      <h5>Amount to donate</h5>
      <div className={classes.inputArea}>
        <p>Algorand</p>
        <input
        // dir="rtl"
          type="number"
          placeholder="ALGO"
          ref={amount}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}

export default Amount;
