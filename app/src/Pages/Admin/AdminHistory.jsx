// import DonationHistoryTable from "../../components/DonationHistoryTable";
import DonationHistoryTable from "../../components/DonationHistoryTable";
// import classes from "../../style/DonationHistory.module.css";
import classes from "../../style/DonationHistory.module.css";

import { useNavigate } from "react-router-dom";

function ProfilePageHistory() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/admin/home", { replace: true });
  };
  const data = [
    {
      date: "27 Sept",
      applicant: "Student N",
      id: "UNITEN A2307512",
      amount: [700.06,700.06,700.06,],
      status: "Approved",
    },
  
  ];
  return (
    <>
      {data.length === 0 ? (
        <div className={classes.main}>
          <h1>You've receive 0 application so far</h1>
          <p>
            Go to{" "}
            <strong className={classes.home} onClick={handleHome}>
              Home
            </strong>{" "}
            to start a change!
          </p>
        </div>
      ) : (
        <DonationHistoryTable
         data={data}
         isAdmin={true}
         ></DonationHistoryTable>
      )}
    </>
  );
}

export default ProfilePageHistory;
