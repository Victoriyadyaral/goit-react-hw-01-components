import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <>
      <h2>История транзакций</h2>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
