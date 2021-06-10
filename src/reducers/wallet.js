// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REQUEST_CURRENCY, GET_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case GET_CURRENCY_SUCCESS:
   // console.log(action.payload);
    return ({
      ...state,
      currencies: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
