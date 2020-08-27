import React from 'react';
import { useRoutes } from './Routes/Router';
import { SnackbarProvider } from 'notistack';
import './Style/index.scss';

const App = () => {
  const routes = useRoutes(true);
  return <SnackbarProvider maxSnack={3}>{routes}</SnackbarProvider>;
};

export default App;
