import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </>
  );
}

export default App;
