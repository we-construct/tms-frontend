import React from "react";
import { Switch } from "react-router-dom";
import "./Style/index.scss";
import Router from "./Routes/Router";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <div className="app">
      <Switch>
        {/* throw warning w/o fragment */}
        <>
          <SnackbarProvider maxSnack={3}>
            <Router />
          </SnackbarProvider>
        </>
      </Switch>
    </div>
  );
};

export default App;
