// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// currencies: moedas
// expenses: despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
}

export default wallet;
