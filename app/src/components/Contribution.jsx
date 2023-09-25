
import classes from '../style/Contribution.module.css'

function ContributionPercentage(props) {
  return (
    <button type="button" className={`btn  btn-rounded ${classes.contribute_button}`}>
      {props.children}
    </button>
  );
}

export default ContributionPercentage;
