import React from "react";
import clsx from "clsx";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "../PageWrapper/useStyles";
import Logout from "./Logout";
import { connect } from "react-redux";
import AdminLinks from "./Adminlinks";
import UserLinks from "./UserLinks";

const NavBar = ({ handleDrawer, open, role }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawer} className={classes.arrow}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <List>
        <UserLinks />
      </List>
      <Divider />
      {role === "Admin" || role === 'Moder'? (
        <>
          <List>
            <AdminLinks />
          </List>
          <Divider />
        </>
      ) : null}
      <List>
        <Logout />
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  role: state.userData.user.role,
});

export default connect(mapStateToProps, null)(NavBar);
