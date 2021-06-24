import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { deletingRow, giveValue } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ (event) => {
          event.preventDefault();
          deletingRow(event.target, giveValue);
        } }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  deletingRow: PropTypes.func.isRequired,
  giveValue: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Button;
