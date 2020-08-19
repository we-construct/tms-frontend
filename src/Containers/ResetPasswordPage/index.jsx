import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { resetPassword } from '../../Redux/Login/actions';

const ResetPasswordPage = ({ resetPassword }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    resetPassword(email);
  };

  return (
    <div className="loginPage">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" />
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <div className="signInForm">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="signInBtn"
            >
              Send new password
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isPasswordReset: state.loginData.isPasswordReset,
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (email) => dispatch(resetPassword(email)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
