const initialState = {
  totalGasto: 0,
  id: 0,
  exchange: [],
  expenses: [],
};

function sumDebt(state, par) {
  return (state.totalGasto + parseFloat(Object.values(par)[0].despesa));
}

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return {
      expenses: [...state.expenses, action.value],
      id: state.id + 1,
      totalGasto: sumDebt(state, [action.value]),
    };
  case 'DELETE_DESPESA':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default wallet;
