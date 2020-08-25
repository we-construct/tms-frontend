import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
