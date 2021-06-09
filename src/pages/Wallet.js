import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <header>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
          <p data-testid="total-field">Valor total: 0</p>
          <h6 data-testid="email-field">{user}</h6>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="type">
            Tag
            <select id="type">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
