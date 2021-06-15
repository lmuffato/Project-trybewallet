import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Valor: '',
      Descrição: '',
      Moeda: '',
      Pagamento: '',
      Tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  selectCurrency(currencies) {
    delete currencies.USDT;
    const currenciesCode = Object.values(currencies);
    return (
      <label htmlFor="Moeda">
        Moeda:
        <select name="Moeda" onChange={ this.handleChange }>
          {currenciesCode.map((currency, index) => (
            <option key={ index }>
              {currency.code}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            valor:
            <input type="text" name="Valor" onChange={ this.handleChange } />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" name="Descrição" onChange={ this.handleChange } />
          </label>
          { this.selectCurrency(currencies) }
          <label htmlFor="Modo de pagamento">
            Método de pagamento:
            <select name="Pagamento" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Crédito">Cartão de crédito</option>
              <option value="Debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag:
            <select name="Tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button"> Adicionar Despesa </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

export default connect(mapStateToProps)(Form);
