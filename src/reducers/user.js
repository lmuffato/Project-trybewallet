import { USER_WALLET } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
