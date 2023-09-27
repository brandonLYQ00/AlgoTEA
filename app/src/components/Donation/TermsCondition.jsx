
import { useRef } from 'react';
import classes from '../../style/TermsCondition.module.css'



function TermsCondition(props) {

const accept = useRef(true);

const handleAccept = ()=>{
  const isAccept =  accept.current.checked;

  props.isAccept(isAccept)

}

  return (
    <section className={classes.terms_condition}>
      <h5>Is this donation for education fee only?</h5>
      <div className={classes.checkbox}>
        <input type="checkbox" name="checkbox" id="checkbox" onChange={handleAccept} ref={accept}/>
        <label htmlFor="checkbox">
          Yes, I'd like to donate for education fee only.
        </label>
      </div>
    </section>
  );
}

export default TermsCondition;
