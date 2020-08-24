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
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (success !== null) {
      history.push('/');
    }
  }, [success]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const acceptHandler = () => {
    const {firstName, lastName, password, confirmPassword, phoneNumber} = data;
    if (firstName !== '' && lastName !== '' && password !== '' && confirmPassword !== '' && phoneNumber !== '') {
      acceptInvitation({
        firstName,
        lastName,
        password,
        confirmPassword,
        phoneNumber,
        token,
      });
    };
    }

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
                  error={error !== null}
                  helperText={error !== null ? error : null}
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
                  error={error !== null}
                  helperText={error !== null ? error : null}
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
                  error={error !== null}
                  helperText={error !== null ? error : null}
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
              error={error !== null}
              helperText={error !== null ? error : null}
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
              error={error !== null}
              helperText={error !== null ? error : null}
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
