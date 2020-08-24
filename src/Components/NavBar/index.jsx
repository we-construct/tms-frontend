import React from "react";
import clsx from "clsx";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import First from "./First/index";
import Secondary from "./Secondary/index";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BadgeAvatars from "./Avatar/index";
import { useStyles } from "../../Containers/MainPage/useStyles";

const NavBar = ({ handleDrawer, open }) => {
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
        <BadgeAvatars />
        <IconButton onClick={handleDrawer} className={classes.arrow}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <First />
      </List>
      <Divider />
      <List>
        <Secondary />
      </List>
    </Drawer>
  );
};

export default NavBar;
