import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';
import './index.scss';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

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

export default ResetPassword;
