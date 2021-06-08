import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../images/wallet.png';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const total = 0;
    return (
      <header>
        <div>
          <img src={ wallet } alt="wallet" />
        </div>
        <div>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa total:
            { total }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  getEmail: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
