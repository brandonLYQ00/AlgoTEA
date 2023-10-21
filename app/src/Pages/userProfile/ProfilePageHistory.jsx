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
      date: "22 Oct",
      receiver: "Brandon Liew Yi Quan",
      amount: "5",
      status: "Successful",
      link: "https://testnet.algoexplorer.io/tx/4VEHYMEJP42N6OLJS7QBCGCA3FMH2ULWVZAOQK3YBDQXNAE3C2HA",
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
