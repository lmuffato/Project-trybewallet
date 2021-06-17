/* eslint-disable no-trailing-spaces */
import React from 'react';
import { connect } from 'react-redux';
import getApi from '../getApi';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: { },
    };
  }

  componentDidMount() {
    getApi().then((data) => { this.setState({ currencies: data }); });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { currencies } = this.state;
    console.log(currencies);
    const currenciesArray = Object.keys(currencies).filter((c) => c !== 'USDT');
    return (
      <form>
        <label htmlFor="id_valor">
          Valor
          <input
            type="number"
            name="name"
            id="id_valor"
          />
        </label>
        <label htmlFor="id_descricao">
          Descrição
          <input
            type="text"
            id="id_descricao"
          />
        </label>
        <label htmlFor="id_moeda">
          Moeda
          <select name="select" id="id_moeda">
            { currenciesArray.map((currencie) => (
              <option key={ currencie }>
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="id_metodo_pagamento">
          Método de pagamento
          <select name="select" id="id_metodo_pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" selected>Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="id_Tag">
          Tag
          <select name="select" id="id_Tag">
            <option value="valor1">Alimentação</option>
            <option value="valor2" selected>Lazer</option>
            <option value="valor3">Trabalho</option>
            <option value="valor3">Transporte</option>
            <option value="valor3">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
