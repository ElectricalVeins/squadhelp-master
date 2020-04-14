import React            from 'react';
import styles           from './TransactionHistory.module.sass'
import PropTypes        from 'prop-types';
import TransactionTable from "../../components/TransactionTable";
import Header           from "../../components/Header/Header";
import { Link }         from "react-router-dom";
import CONSTANTS from '../../constants'


const data = [
  {
    id: 1,
    type: CONSTANTS.INCOME,
    sum: 350
  },
  {
    id: 2,
    type: CONSTANTS.EXPENSE,
    sum: -350
  },
  {
    id: 3,
    type: CONSTANTS.INCOME,
    sum: 700
  },
  {
    id: 4,
    type: CONSTANTS.EXPENSE,
    sum: -450
  },
  {
    id: 5,
    type: CONSTANTS.EXPENSE,
    sum: -750
  },
]

const TransactionHistory = props => {
  return (
    <>
      <Header/>
      <div className={styles.pageWrapper}>
          {
            data ? <TransactionTable data={data} className={styles.tableContainer}/>
                 : ( <div style={{ textAlign: 'center' }}>You don't have any transactions yet</div> )
          }
        <Link to='/dashboard' className={styles.link}>Back to Dashboard</Link>
      </div>
    </>
  );
};

TransactionHistory.propTypes = {};

export default TransactionHistory;