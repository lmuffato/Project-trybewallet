// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case 'SET_EXPENSES':
    return { ...state,
      expenses: [...state.expenses, action.payload.expenses],
      id: state.id + action.payload.id,
      total: state.total + action.payload.total,
    };
  case 'SET_CURRENCIES':
    return { ...state, currencies: action.payload.currencies };
  default:
    return state;
  }
}
