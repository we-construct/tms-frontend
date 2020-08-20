import React from "react";
import { Switch } from "react-router-dom";
import "./Style/index.scss";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <NavBar />
      </Switch>
    </div>
  );
};

export default App;
