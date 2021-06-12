import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import updateAction from '../../actions/update.action';
import { END_POINT } from '../../common/def';
import getCurrency from '../../services/api';

export default function ExpenseForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function updateKeys() {
      const keys = await getCurrency(END_POINT);
      dispatch(updateAction(keys));
    }
    updateKeys();
  }, []);
  const { currencies } = useSelector((state) => state.wallet);
  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input type="text" id="valor" />
      </label>
      <label htmlFor="descricao">
        Descrição:
        <input type="text" id="descricao" />
      </label>
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          { currencies.map((moeda) => (
            <option key={ moeda } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
      <label htmlFor="pagamento">
        Método de pagamento
        <select id="pagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select id="tag">
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
