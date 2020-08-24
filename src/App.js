import React from "react";
import { Switch } from "react-router-dom";
import Router from "./Routes/Router"
import "./Style/index.scss";

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
