import React     from 'react';
import PropTypes from 'prop-types';

const TransactionTable = props => {
  const { data, className } = props;

  return (
    <table className={className}>
      <TableHead/>
      <tbody>
      {
        data.map( transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>
              {
                transaction.isIncome ? 'Income'
                                     : 'Expense'
              }
            </td>
            <td>
              {
                transaction.isIncome ? `+${transaction.sum}$`
                                     : `-${transaction.sum}$`
              }
            </td>
          </tr> ) )
      }
      </tbody>
    </table>
  );
};

TransactionTable.defaultProps = [ {} ];

TransactionTable.propTypes = {
  data: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.number,
    isIncome: PropTypes.bool,
    sum: PropTypes.number,
  } ) )
};

export default TransactionTable;

const TableHead = () => (
  <thead>
  <tr>
    <th>ID</th>
    <th>Income or Expense</th>
    <th>Sum</th>
  </tr>
  </thead>
)
