import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import edit from '../images/edit.png';
import trash from '../images/trash.png';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  tableHeader() {
    return (
      <tr className="table-header">
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
    );
  }

  editButton() {
    return (
      <button
        type="button"
        className="edit-button"
        data-testid="edit-btn"
      >
        <img src={ edit } alt="delete" width="15px" />
      </button>
    );
  }

  render() {
    const { expenses, deleteDispatch } = this.props;
    return (
      <table>
        <tbody>
          {this.tableHeader()}
          {expenses.map((expense) => {
            const currency = expense.exchangeRates[expense.currency].ask;
            const newCurrency = parseFloat(currency).toFixed(2);
            const convertedValue = (parseFloat(expense.value) * parseFloat(currency));
            const newConvertedValue = convertedValue.toFixed(2);
            function name() {
              const currencyName = expense.exchangeRates[expense.currency].name;
              const number = -16;
              if ((currencyName).includes('Dólar Americano')) {
                return 'Dólar Comercial';
              } if ((currencyName).includes('/Real Brasileiro')) {
                return currencyName.slice(0, number);
              } return currencyName;
            }
            return (
              <tr key={ expense.id } className="table-row">
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{name()}</td>
                <td>{newCurrency}</td>
                <td>{newConvertedValue}</td>
                <td>Real</td>
                <td>
                  {this.editButton()}
                  <button
                    type="button"
                    className="delete-button"
                    data-testid="delete-btn"
                    onClick={ () => deleteDispatch(expense.id) }
                  >
                    <img src={ trash } alt="delete" width="15px" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);