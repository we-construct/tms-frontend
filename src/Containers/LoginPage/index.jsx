import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './index.scss';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className="signInForm">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="signInBtn"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/reset-password" className="forgot_link">
                  Forgot password?
                </NavLink>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
