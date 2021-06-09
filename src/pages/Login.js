import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validate() {
    const { email, password } = this.state;
    const minLength = 6;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if ((password.length >= minLength) && (emailPattern.test(email) === true)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    return (
      <form className="form-login">
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          value={ email }
          required
        />
        <input
          type="password"
          placeholder="Senha"
          minLength="6"
          data-testid="password-input"
          onChange={ (e) => this.setState({ password: e.target.value }) }
          value={ password }
          required
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validate() }
            onClick={ () => user(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
