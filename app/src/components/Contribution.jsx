import classes from "../style/Contribution.module.css";

function ContributionPercentage(props) {

  const {selected,onClick} = props;

  // const handleClick = ()=>{
  //   props.selectedValue(props.children)
  // }
  const percentageStyle = {
    backgroundColor: selected? '#6FFCD2':'#a0b4ae4e'
  }
  return (
    <button
      type="button"
      className={`btn  btn-rounded ${classes.contribute_button}`}
      onClick={onClick}
      style={percentageStyle}>
      {props.children}
    </button>
  );
}

export default ContributionPercentage;
