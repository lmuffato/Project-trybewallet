import {
  CREATE_EXPENSE, EDITE_EXPENSE, DELETE_EXPENSE, UPDATE_TOTAL,
} from '../actions/walletAction';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case CREATE_EXPENSE: {
    const { payload: { currencies } } = action;
    return {
      ...state,
      currencies,
    };
  }
  case EDITE_EXPENSE: {
    const { payload: { expenses } } = action;
    return {
      ...state,
      expenses,
    };
  }
  case DELETE_EXPENSE: {
    const { payload: { newExpense } } = action;
    return {
      ...state,
      newExpense,
    };
  }
  case UPDATE_TOTAL: {
    const { payload: { total } } = action;
    return {
      ...state,
      total,
    };
  }
  default:
    return state;
  }
}
