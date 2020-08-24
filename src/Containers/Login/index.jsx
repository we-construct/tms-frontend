import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/Users/actions";
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

const Login = ({ error, success, loginUser }) => {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const loginHandler = () => {
    loginUser({
      email: data.email,
      password: data.password,
      isCheckedRememberMe: check,
    });
  };

  return (
    <div className="loginPage">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" />
          {success === null ? (
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          ) : (
            <Typography component="h5" variant="body1" color="primary" align="center">
              Than you {success.firstName} for accepting invitation, plaease
              sign in!
            </Typography>
          )}
          <div className="signInForm">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              name="email"
              value={data.email}
              onChange={changeHandler}
              error={error !== null}
              helperText={error !== null ? error : null}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              error={error !== null}
              helperText={error !== null ? error : null}
            />
            <FormControlLabel
              onChange={() => setCheck(!check)}
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  name="remember"
                  checked={check}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="signInBtn"
              onClick={loginHandler}
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

const mapStateToProps = (state) => ({
  error: state.userData.error,
  success: state.userData.success,
});

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
