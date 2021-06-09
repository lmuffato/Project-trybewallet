import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const email = useSelector((state) => state.user.email);
  const [initialValue] = React.useState(0);

  return (
    <header className="header">
      <div>Trybe-Wallet</div>
      <div className="email-container">
        <div>
          Email :
          {' '}
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          Despesa Total: R$
          {' '}
          <span data-testid="total-field">
            {initialValue}
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
