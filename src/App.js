import React, { useEffect } from "react";
import { useRoutes } from "./Routes/Router";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";
import { loginCookie } from "./Redux/Users/actions";
import "./Style/index.scss";

const App = ({ userId, loginCookie }) => {
  const routes = useRoutes(userId);

  useEffect(() => {
    if (document.cookie !== "") {
      loginCookie();
    }
    //eslint-disable-next-line
  }, []);

  return <SnackbarProvider maxSnack={3}>{routes}</SnackbarProvider>;
};

const mapDispatchToProps = (dispatch) => ({
  loginCookie: () => dispatch(loginCookie()),
});

const mapStateToProps = (state) => ({
  userId: state.userData.user.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
