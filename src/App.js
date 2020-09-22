import React, { useState, useEffect } from "react";
import { useRoutes } from "./Routes/Router";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";
import { loginCookie } from "./Redux/Users/actions";
import io from "socket.io-client";
import Notifications from "./Containers/Notifications";
import "./Style/index.scss";

let socket;

const App = ({ isAuth, loginCookie, user }) => {
  const [notification, setNotification] = useState(null)
  const routes = useRoutes(isAuth);

  useEffect(() => {
    if (document.cookie !== "") {
      loginCookie();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket = io('http://localhost:5000');
    return () => socket.disconnect()
  }, [])

  useEffect(() => {
    if (isAuth && user){
      socket.emit("join", { name: `${user.firstName} ${user.lastName}`, role: user.role }, (error) => {
          if (error) {
            alert(error);
          }
        }
      );
    }
  }, [user])

useEffect(() => {
  socket.on("notification", (notification) => {
    setNotification(notification);
  });
    socket.on("roleData", (users) => {
      console.log('All logged in users`', users);
  });
    socket.on("getClients", (clients) => {
      console.log('All logged in clients`', clients);
  });

}, [])
  return (
    <SnackbarProvider maxSnack={3}>
      {routes}
      <Notifications notification={notification} />
    </SnackbarProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginCookie: () => dispatch(loginCookie()),
});

const mapStateToProps = (state) => ({
  isAuth: state.userData.user.isAuth,
  user: state.userData.profileData,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
