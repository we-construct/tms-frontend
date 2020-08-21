import React from "react";
import clsx from "clsx";

import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BadgeAvatars from "./Avatar/index";

import { useStyles } from "./useStyles";

import Main from "./ListItems/Main/index";
import Secondary from "./ListItems/Secondary/index";

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* This part is related to header */}
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            WeConstract
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={100} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <BadgeAvatars />
          <IconButton onClick={handleDrawerOpen}>
            <ChevronLeftIcon className={classes.arrow} />
          </IconButton>
        </div>
        <Divider />
        
        {/* left sidebar */}
        <List>
          <Main />
        </List>
        <Divider />
        <List>
          <Secondary />
        </List>
      </Drawer>
    </div>
  );
}
