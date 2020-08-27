import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../PageWrapper/useStyles';

const Header = ({ handleDrawer, open }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        elevation={0}
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={handleDrawer} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            WeConstruct
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
