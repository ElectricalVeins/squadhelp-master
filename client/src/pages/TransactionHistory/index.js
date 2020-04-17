import React, { useEffect } from 'react';
import styles               from './TransactionHistory.module.sass'
import TransactionTable     from "../../components/TransactionTable";
import Header               from "../../components/Header/Header";
import { Link }             from "react-router-dom";
import { connect }          from "react-redux";
import {
  createClearErrorAction,
  createGetStatementRequest,
  createGetTransactionsRequest
}                           from "../../actions/actionCreator";
import Spinner              from "../../components/Spinner/Spinner";
import Error                from "../../components/Error/Error";

const TransactionHistory = props => {
  const { getStatement, getTransactions, transactions, statement: { income, expense }, isFetchingTransactions, isFetchingStatement, error, clearError } = props

  useEffect( () => {
    getTransactions();
    getStatement();
  }, [] )

  const statementRender = () => (
    <div className={styles.statement}>
      <p>
        <span>Total Income:</span>
        <span>
          {
            income ? `${income}$` : '0$'
          }
        </span>
      </p>
      <p>
        <span>Total expense:</span>
        <span>
          {
            expense ? `${expense}$` : '0$'
          }
        </span>
      </p>
    </div>
  )

  const tableRender = () => ( <>
    {
      transactions.length !== 0 &&
      ( <TransactionTable data={transactions}
                          className={styles.tableContainer}/> )
    }
  </> )

  return (
    <>
      <Header/>
      <div className={styles.pageWrapper}>
        {
          error && <Error status={error.status} data={error.data} clearError={() => clearError()}/>
        }
        {
          isFetchingStatement && isFetchingTransactions ? <Spinner/>
                                                        : ( <>
                                                          {tableRender()}
                                                          {statementRender()}
                                                        </> )
        }
        <Link to='/dashboard' className={styles.link}>Back to Dashboard</Link>
      </div>
    </>
  );
};

const mapStateToProps = state => state.transactions

const mapDispatchToProps = dispatch => ( {
  getTransactions: () => dispatch( createGetTransactionsRequest() ),
  getStatement: () => dispatch( createGetStatementRequest() ),
  clearError: () => dispatch( createClearErrorAction() ),
} )

export default connect( mapStateToProps, mapDispatchToProps )( TransactionHistory );