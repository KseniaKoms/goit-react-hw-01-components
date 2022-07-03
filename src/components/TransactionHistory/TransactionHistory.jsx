import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

function TransactionHistory({transactions}) {
return( <table className={css.transactionHistory}>
  <thead className={css.thread}>
    <tr>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
    </thead>
     <tbody className={css.tableBody}>{transactions.map(({ id, type, amount, currency }) => (  
    <tr key={id}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
))}</tbody> 
</table>)
}

export default TransactionHistory

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
}))
}