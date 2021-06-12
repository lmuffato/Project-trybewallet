import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.handleTable = this.handleTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(expense) {
    const { id } = expense;
    const { removeItem } = this.props;
    removeItem(id);
  }

  handleHeadler() {
    return (
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
    );
  }

  handleTable(expense) {
    const { id, method, tag, currency, description, value, exchangeRates } = expense;
    const name = exchangeRates[currency].name.split('/');
    const resolvedValue = value * exchangeRates[currency].ask;
    const exchangeUsed = Number(exchangeRates[currency].ask);
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{name[0]}</td>
        <td>{exchangeUsed.toFixed(2)}</td>
        <td>{resolvedValue.toFixed(2)}</td>
        <td>Real</td>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => this.handleClick(expense) }
        >
          Deletar
        </button>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.handleHeadler() }
        { expenses.length !== 0 && expenses.map((expense) => this.handleTable(expense))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeExpense(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);