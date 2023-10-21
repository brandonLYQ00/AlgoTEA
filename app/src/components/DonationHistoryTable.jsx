import classes from "../style/DonationHistoryTable.module.css";
function DonationHistoryTable(props) {
  const { data, isAdmin } = props;

  //   date: "27 Sept",
  // applicant: "Student N",
  // id: "UNITEN A2307512",
  // amount: [700.06,700.06,700.06,],
  // status: "Approved",
  return (
    <div className={classes.spending}>
      {isAdmin ? (
        <h1>You've received {data.length} applications so far</h1>
      ) : (
        <h1>You've made {data.length} donations so far</h1>
      )}
      <table className={classes.table}>
        <thead>
        {isAdmin ? (
          <tr>
            <th>Date</th>
            <th>Applicant</th>
            <th>ID</th>
            <th>College fees</th>
            <th>Daily meals</th>
            <th>Others</th>
            <th>Status</th>
          </tr>
        ) : (
          <tr>
            <th>Date</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        )}
        </thead>
        <tbody>
          {isAdmin
            ? data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.applicant}</td>
                    <td>{val.id}</td>

                    {val.amount.map((element, index) => {
                      return <td>{element}</td>;
                    })}

                    <td>{val.status}</td>
                  </tr>
                );
              })
            : data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.receiver}</td>
                    <td>{val.amount}</td>
                    <td>{val.status}</td>
                    <td
                      className={classes.track_spending}
                      onClick={() => {
                        alert(val.link);
                      }}>
                      Click here to track transaction
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default DonationHistoryTable;
