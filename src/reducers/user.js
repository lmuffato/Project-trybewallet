import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return action.payload;
  default:
    return state;
  }
}
