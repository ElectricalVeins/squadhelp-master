import ACTION from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
  statement: {},
  transactions: [],
  isFetchingTransactions: false,
  isFetchingStatement: false,
  error: null
};

function transactionReducer( state = initialState, action ) {
  switch ( action.type ) {
    case ACTION.GET_TRANSACTIONS_REQUEST: {
      return {
        ...state,
        isFetchingTransactions: true,
      }
    }
    case ACTION.GET_TRANSACTIONS_SUCCESS: {
      const { data } = action

      return {
        ...state,
        isFetchingTransactions: false,
        transactions: data,
      }
    }
    case ACTION.GET_TRANSACTIONS_ERROR: {
      return {
        ...state,
        isFetchingTransactions: false,
        error: action.error,
      }
    }
    case ACTION.GET_STATEMENT_REQUEST: {
      return {
        ...state,
        isFetchingStatement: true,
      }
    }
    case ACTION.GET_STATEMENT_ERROR: {
      return {
        ...state,
        isFetchingStatement: false,
        error: action.error,
      }
    }
    case ACTION.GET_STATEMENT_SUCCESS: {
      const { data } = action


      return {
        ...state,
        isFetchingStatement: false,
        statement: data,
      }
    }
    case ACTION.CLEAR_TRANSACTION_ERROR:{
      return {
        ...state,
        error: null
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default transactionReducer
