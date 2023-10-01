import React from "react";
import classes from "../style/BreakDownCategory.module.css";
import grad from "../assets/graduation-cap.png";
import others from "../assets/stationary 1.png";
import foods from "../assets/fast-food.png";

function Category(props) {
  const { desc, amount } = props;

  return (
    <>
      <div className={classes.category}>
        {/* <img src={grad} alt="" /> */}
        {props.children}
        <div className={classes.category_details}>
          <p>{desc}</p>
          <p className={classes.amount}>RM {amount}</p>
        </div>
      </div>
    </>
  );
}

export default Category;
