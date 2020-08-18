import React from "react";
import { Route } from "react-router-dom";
import routes from "./Routes";

function Router() {
  return routes.map((route) => {
    const RouteComponent = route.component;
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={() => <RouteComponent />}
      />
    );
  });
}

export default Router;
