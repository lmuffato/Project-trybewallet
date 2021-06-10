import React from 'react';

export default function ExpenseForm() {
  return (
    <form>
      <label htmlFor="valor">
        Valor
        <input data-testid="value-input" type="text" id="valor" />
      </label>
      <label htmlFor="descricao">
        Descrição
        <input data-testid="description-input" type="text" id="descricao" />
      </label>
      <label htmlFor="moeda">
        Moeda
        <select data-testid="currency-input" id="moeda">
          {/* <option value="USD" data-testid="USD">USD</option>
          <option value="XRP" data-testid="XRP">XRP</option> */}
        </select>
      </label>
      <label htmlFor="pagamento">
        Método de pagamento
        <select data-testid="method-input" id="pagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select data-testid="method-input" id="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </form>
  );
}
