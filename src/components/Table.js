import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  convertedValue() {
    const { expenses } = this.props;
    const expVal = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = (parseFloat(expense.value) * parseFloat(currencyRate));
      return (convertedValue).toFixed(2);
    });
    return expVal;
  }

  render() {
    const { expenses, deleteDispatch } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.map((expense) => {
            const spendCurrency = expense.currency;
            const currencyName = expense.exchangeRates[spendCurrency].name;
            const currency = expense.exchangeRates[spendCurrency].ask;
            const newCurrency = parseFloat(currency).toFixed(2);
            const convertedValue = (parseFloat(expense.value) * parseFloat(currency));
            const newConvertedValue = convertedValue.toFixed(2);
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{currencyName}</td>
                <td>{newCurrency}</td>
                <td>{newConvertedValue}</td>
                <td>Real</td>
                <button
                  type="button"
                  className="delete-button"
                  data-testid="delete-btn"
                  onClick={ () => deleteDispatch(expense.id) }
                >
                  Deletar
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
