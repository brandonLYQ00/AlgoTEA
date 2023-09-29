import DonationHistoryTable from "../../components/DonationHistoryTable";
import classes from "../../style/DonationHistory.module.css";

import { useNavigate } from "react-router-dom";

function ProfilePageHistory() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/profile/home", { replace: true });
  };
  const data = [
    {
      date: "27 Sept",
      receiver: "Student N",
      amount: "5000",
      status: "spent",
      link: "Track spending1",
    },
    {
      date: "27 Sept",
      receiver: "Student N",
      amount: "5000",
      status: "spent",
      link: "Track spending2",
    },
  ];
  return (
    <>
      {data.length === 0 ? (
        <div className={classes.main}>
          <h1>You've made 0 donations so far</h1>
          <p>
            Go to{" "}
            <strong className={classes.home} onClick={handleHome}>
              Home
            </strong>{" "}
            to start a change!
          </p>
        </div>
      ) : (
        <DonationHistoryTable data={data}></DonationHistoryTable>
      )}
    </>
  );
}

export default ProfilePageHistory;
