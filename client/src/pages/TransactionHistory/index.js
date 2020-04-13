import React            from 'react';
import styles           from './TransactionHistory.module.sass'
import PropTypes        from 'prop-types';
import TransactionTable from "../../components/TransactionTable";
import Header           from "../../components/Header/Header";
import { Link }         from "react-router-dom";

const data = [
  {
    id: 1,
    isIncome: true,
    sum: 350
  },
  {
    id: 2,
    isIncome: false,
    sum: 350
  },
  {
    id: 3,
    isIncome: true,
    sum: 700
  },
  {
    id: 4,
    isIncome: false,
    sum: 450
  },
  {
    id: 5,
    isIncome: false,
    sum: 750
  },
]

const TransactionHistory = props => {
  return (
    // Компонент - Таблица
    // данные массив объектов
    // объект: id, isIncome, sum
    <>
      <Header/>
      <div className={styles.pageWrapper}>
          {
            data ? <TransactionTable data={data} className={styles.tableContainer}/>
                 : ( <div style={{ textAlign: 'center' }}>You don't have a transactions yet</div> )
          }
        <Link to='/dashboard' className={styles.link}>Back to Dashboard</Link>
      </div>
    </>
  );
};

TransactionHistory.propTypes = {};

export default TransactionHistory;