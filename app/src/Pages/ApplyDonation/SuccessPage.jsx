import classes from "../../style/SuccessPage.module.css";

import success from "../../Assets/success.png";

import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <main className={classes.main}>
      <div className={classes.success}>
        <img src={success} alt="" />
        <h4>Application sent!</h4>
        <p>Please look out for any notification from us.</p>
        <button
          onClick={() => {
            navigate("/profile/home", { replace: true });
          }}>
          <p>Return home</p>
        </button>
      </div>
    </main>
  );
}

export default SuccessPage;
