import React, { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { sendInvite, setError } from '../../Redux/APanel/actions';
import { useSnackbar } from 'notistack';

const InvitationForm = ({
  sendInvite,
  roles,
  positions,
  loading,
  error,
  setError,
}) => {
  const [form, setForm] = useState({
    email: '',
    roleId: '',
    positionId: '',
  });
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      setError(null);
    }
  }, [error, setError, enqueueSnackbar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendInvite({
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4Iiwicm9sZSI6MSwic3RhdHVzIjoxLCJlbWFpbCI6InZhYXJzZW55YW5AZ21haWwuY29tIiwiaWF0IjoxNTk4MzQ1MTMyfQ.1IMHSDzo3PJb92h-tQavAlwPe5gBjNWyb6V7U92E7M0',
      ...form,
      createdById: '28',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
      <TextField
        id="outlined-basic"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
        helperText="Please enter email"
        required={true}
        style={{ width: '100%' }}
      />
      <div className={classes.inputsWrapper}>
        <TextField
          id="filled-select-currency"
          value={form.roleId}
          onChange={handleChange}
          name="roleId"
          select
          label="Role"
          required={true}
          variant="outlined"
          helperText="Please select role"
        >
          {roles.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency"
          value={form.positionId}
          onChange={handleChange}
          name="positionId"
          select
          required={true}
          label="Position"
          helperText="Please select position"
          variant="outlined"
        >
          {positions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button
        style={{ width: '100%' }}
        type="submit"
        variant="contained"
        color="primary"
        endIcon={loading && <CircularProgress color="#fff" size={20} />}
        disabled={loading}
      >
        Send
      </Button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  roles: state.adminData.roles,
  positions: state.adminData.positions,
  error: state.adminData.error,
  loading: state.appData.loading,
});
const mapDispatchToProps = (dispatch) => ({
  sendInvite: (data) => dispatch(sendInvite(data)),
  setError: (data) => dispatch(setError(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InvitationForm);
