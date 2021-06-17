import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTwo extends Component {
  render() {
    const { handleChangeInput, pagamento, tag } = this.props;
    return (
      <>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select
            onChange={ handleChangeInput }
            value={ pagamento }
            name="pagamento"
            id="pagamento"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            onChange={ handleChangeInput }
            value={ tag }
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

InputTwo.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  pagamento: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,

};
