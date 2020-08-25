import React from 'react';
import { useStyles } from './useStyles';
import Header from '../Header';
import NavBar from '../NavBar';
import { setNavbarToggle } from '../../Redux/app/actions';
import { connect } from 'react-redux';

const PageWrapper = ({ children, toggle, setNavbarToggle }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header handleDrawer={() => setNavbarToggle()} open={toggle} />
      <NavBar handleDrawer={() => setNavbarToggle()} open={toggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggle: state.appData.navbarToggle,
});

export default connect(mapStateToProps, { setNavbarToggle })(PageWrapper);
