/* eslint-disable no-self-compare */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import './App.global.css';
import keytar from 'keytar';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function PrivateRoute({ children, ...rest }: any) {
  console.log(rest);

  return (
    <Route
      {...rest}
      render={() => {
        return true === true ? children : <Redirect to="/login" />;
      }}
    />
  );
}

async function findPassword({ service }: any) {
  const findPassResponse = await keytar.findPassword(service);
  return findPassResponse;
}

export default function App() {
  const [account, setAccount] = useState<string>();

  const onSubmitFindPassword = async () => {
    const token = await findPassword({
      service: 'pass',
    });
    if (token) setAccount(token);
  };

  useEffect(() => {
    onSubmitFindPassword();
  }, []);

  if (!account) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
