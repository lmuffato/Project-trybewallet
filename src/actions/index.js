// Coloque aqui suas actions

export const LOGIN_USER = 'LOGIN_USER';

export const logInUser = (email) => {
  console.log(email);
  return ({
    type: LOGIN_USER,
    payload: email,
  });
};
