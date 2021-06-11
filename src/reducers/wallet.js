// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, { wallet: { currencies } = [], type }) {
  switch (type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(currencies).forEach((key) => state.wallet.currencies.push({
        name: key,
        value: currencies[key],
      })),
    };
  default:
    return state;
  }
}

export default wallet;
