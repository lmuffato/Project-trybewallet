import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      currency: 'BRL',
    });
  }

  calculateTotal() {
    const { expenses } = this.props;

    if (expenses.length !== 0) {
      const values = expenses.map((expense) => Number(expense.value));
      return (values.reduce((acc, currentValue) => acc + currentValue));
    } return 0;
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;

    const total = this.calculateTotal();

    return (
      <div>
        <h3>Bruno`s Wallet</h3>
        <div>
          <h4 data-testid="email-field">{ `Bem vindo ${email}` }</h4>
          <h4 data-testid="total-field">{ `Total: ${total}` }</h4>
          <h4 data-testid="header-currency-field">{`${currency}`}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps, null)(Header);
