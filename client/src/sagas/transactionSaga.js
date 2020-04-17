import { put }             from 'redux-saga/effects';
import ACTION              from '../actions/actionTypes';
import * as restController from '../api/rest/restController';


export function* getTransactions() {
  try {
    const { data } = yield restController.getUserTransactions();
    yield  put( {
      type: ACTION.GET_TRANSACTIONS_SUCCESS,
      data,
    } )
  } catch ( error ) {
    yield put( {
      type: ACTION.GET_TRANSACTIONS_ERROR,
      error: error.response,
    } )
  }
}

export function* getStatements() {
  try {
    const { data } = yield restController.getUserStatement();
    yield  put( {
      type: ACTION.GET_STATEMENT_SUCCESS,
      data,
    } )
  } catch ( error ) {
    yield put( {
      type: ACTION.GET_STATEMENT_ERROR,
      error: error.response,
    } )
  }
}
