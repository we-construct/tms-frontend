import React from "react";
import { Switch } from "react-router-dom";
import "./Style/index.scss";
import Router from "./Routes/Router";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Router />
      </Switch>
    </div>
  );
};

export default App;
