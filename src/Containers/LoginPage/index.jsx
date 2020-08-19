import React from "react";
import {
  Container,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./index.scss";

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
