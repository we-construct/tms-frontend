import React, { useState } from "react";
import { Switch } from "react-router-dom";
import Router from "./Routes/Router";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import { useStyles } from "./Containers/MainPage/useStyles";
import { SnackbarProvider } from "notistack";
import "./Style/index.scss";

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Header handleDrawer={() => setOpen(!open)} open={open} />
      <NavBar handleDrawer={() => setOpen(!open)} open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {/* throw warning w/o fragment */}
          <>
            <SnackbarProvider maxSnack={3}>
              <Router />
            </SnackbarProvider>
          </>
        </Switch>
      </main>
    </div>
  );
}

export default App;
