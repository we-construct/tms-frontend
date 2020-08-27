import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { acceptInvitation } from "../../Redux/Users/actions";
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

const AcceptInvitation = ({ error, success, acceptInvitation }) => {
  const history = useHistory();
  // taking token from url
  const { token } = useParams();
  const [errorHandler, setErrorHandler] = useState(error);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // if user enter all fields and complete invitation`
    if (success !== null) {
      history.push("/");
    }
    // no history changes needed
    // eslint-disable-next-line
  }, [success]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const acceptHandler = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      phoneNumber,
    } = data;
    // front validation
    if (token.length === 0) return setErrorHandler("Token error");
    if (
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      confirmPassword === "" ||
      phoneNumber === ""
    )
      return setErrorHandler("Enter all fields");
    if (phoneNumber.length < 12)
      return setErrorHandler("Enter correct phone number");
    if (password.length < 6)
      return setErrorHandler("Password must be more than 6 characters");
    if (password !== confirmPassword)
      return setErrorHandler("Passwords is not matching");
    // if ok` then
    setErrorHandler(null);
    acceptInvitation({
      firstName,
      lastName,
      password,
      confirmPassword,
      phoneNumber,
      token,
    });
  };

  return (
    <div className="acceptionPage">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" />
          <Typography component="h1" variant="h5">
            Accept Invitation
          </Typography>
          <div className="acceptForm">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="First Name"
                  name="firstName"
                  inputProps={{ maxLength: 16 }}
                  value={data.firstName}
                  onChange={changeHandler}
                  autoFocus
                  error={errorHandler !== null}
                  helperText={errorHandler !== null ? errorHandler : null}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="Last Name"
                  name="lastName"
                  value={data.lastName}
                  inputProps={{ maxLength: 16 }}
                  onChange={changeHandler}
                  error={errorHandler !== null}
                  helperText={errorHandler !== null ? errorHandler : null}
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
                  name="phoneNumber"
                  error={errorHandler !== null}
                  helperText={errorHandler !== null ? errorHandler : null}
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
              error={errorHandler !== null}
              helperText={errorHandler !== null ? errorHandler : null}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={changeHandler}
              error={errorHandler !== null}
              helperText={errorHandler !== null ? errorHandler : null}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="acceptBtn"
              onClick={acceptHandler}
            >
              Accept
            </Button>
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
    acceptInvitation: (data) => dispatch(acceptInvitation(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInvitation);
