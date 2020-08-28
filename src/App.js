import React from 'react';
import { useRoutes } from './Routes/Router';
import { connect } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import './Style/index.scss';

const App = ({ userId }) => {
  const routes = useRoutes(userId);
  return <SnackbarProvider maxSnack={3}>{routes}</SnackbarProvider>;
};

const mapStateToProps = (state) => ({
  userId: state.userData.user.id,
});

export default connect(mapStateToProps, null)(App);
