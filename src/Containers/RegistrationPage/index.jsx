import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";
import InputMask from "react-input-mask";
import "./index.scss";

const RegistrationPage = () => {
    
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="registrationPage">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" />
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <div className="registerForm">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="Name"
                  name="first_name"
                  inputProps={{ maxLength: 16 }}
                  value={data.first_name}
                  onChange={changeHandler}
                  autoFocus
                />
              </Grid>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="Last Name"
                  name="last_name"
                  value={data.last_name}
                  inputProps={{ maxLength: 16 }}
                  onChange={changeHandler}
                />
              </Grid>
            </Grid>
            {/* phone number mask */}
            <InputMask mask="+37499999999" onChange={changeHandler} maskChar="">
              {() => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone_number"
                />
              )}
            </InputMask>
            {/* // */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              inputProps={{ maxLength: 16 }}
              onChange={changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirm_password"
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="registerBtn"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
