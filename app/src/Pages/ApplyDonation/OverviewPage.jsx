import classes from "../../style/OverviewPage.module.css";
import { useNavigate, } from 'react-router-dom';

function ApplicationOverview() {
    const history =  useNavigate();
    const handleCancel = ()=>{
        history(-1)
    }

    const handleProceed = ()=>{
        history('/apply-donation/personal-info')
    }
  return (
    <>
      <main className={classes.main}>
        <h1>Apply for Donation</h1>
        <section className={`  ${classes.content}`}>
          <div className={`card ${classes.eligibility}`}>
            <div className={`card-body `}>
              <h3>Application Eligibility</h3>
              <p>
                1. You must be a current student at a university in Malaysia.
              </p>
              <p>2.You may not apply under someone’s credentials.</p>
              <p>
                3. If there is suspected fraud in the application, the said
                application will be automatically barred and user will be
                permanently banned from AlgoTEA.
              </p>
            </div>
          </div>
          <div className={`card ${classes.approval_process}`}>
            <div className={`card-body`}>
              <h3>Approval Process</h3>
              <p>1. You shall receive a response between 1-4 working days depending on the university.</p>

              <p>
                2. You will be contacted through your email if your application
                passed or failed the application reviews.
              </p>
            </div>
          </div>
          <div className={`card ${classes.terms_condition}`}>
            <div className={`card-body`}>
              <h3>Terms & Conditions</h3>
              <p>
                By proceeding to apply for donation funds, you agree with our
                data & privacy policy.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.buttons}>
          <button
            type="button"
            className={`btn ${classes.secondary_btn} `}
            onClick={handleCancel}
            >
            Cancel
          </button>
          <button
            type="button"
            className={`btn  ${classes.primary_btn} `}
            onClick={handleProceed}>
            Proceed Application
          </button>
        </section>
      </main>
    </>
  );
}

export default ApplicationOverview;
