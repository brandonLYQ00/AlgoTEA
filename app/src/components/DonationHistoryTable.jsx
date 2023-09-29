
import classes from '../style/DonationHistoryTable.module.css'

function DonationHistoryTable(props) {
    const {data} = props
  return (
    <div className={classes.spending}>
      <h1>You've made {data.length} donations so far</h1>
      <table className={classes.table}>
        <tr>
          <th>Date</th>
          <th>Receiver</th>
          <th>Amount</th>
          <th>Status</th>
          <th></th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.date}</td>
              <td>{val.receiver}</td>
              <td>{val.amount}</td>
              <td>{val.status}</td>
              <td
                className={classes.track_spending}
                onClick={() => {
                  console.log(val.link);
                }}>
                {val.link}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default DonationHistoryTable;
