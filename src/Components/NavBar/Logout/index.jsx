import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser } from "../../../Redux/Users/actions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Logout = ({ logoutUser }) => {
  const logOutHandler = () => {
    logoutUser();
  };

  return (
    <div>
      <ListItem button onClick={logOutHandler}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
