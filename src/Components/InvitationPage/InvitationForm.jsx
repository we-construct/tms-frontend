import React, { useState, useEffect } from "react";
import { MenuItem, TextField, CircularProgress, Button, InputLabel, FormHelperText, FormControl, Select } from "@material-ui/core";
import { useStyles } from "./styles";
import { connect } from "react-redux";
import { sendInvite, setError } from "../../Redux/APanel/actions";
import { useSnackbar } from "notistack";

const InvitationForm = ({
  sendInvite,
  roles,
  positions,
  loading,
  error,
  setError,
}) => {
  const [form, setForm] = useState({
    email: "",
    roleId: "",
    positionId: "",
  });
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      setError(null);
    }
    //eslint-disable-next-line
  }, [error]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendInvite({
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4Iiwicm9sZSI6MSwic3RhdHVzIjoxLCJlbWFpbCI6InZhYXJzZW55YW5AZ21haWwuY29tIiwiaWF0IjoxNTk4Mzg0MjI2fQ.TBIUwWxx2N3vQsS3Rb96mxh1xGSyBYribxd2qjAqbu8",
      ...form,
      createdById: "28",
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
        style={{ width: "100%" }}
      />
      <div className={classes.inputsWrapper}>
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-simple-select-required-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={form.roleId}
            onChange={handleChange}
            name="roleId"
            className={classes.selectEmpty}
          >
            {roles !== null
              ? roles.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.name}
                  </MenuItem>
                ))
              : null}
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-simple-select-required-label">
            Position
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={form.positionId}
            onChange={handleChange}
            name="positionId"
            className={classes.selectEmpty}
          >
            {positions !== null
              ? positions.map((pos) => (
                  <MenuItem key={pos.id} value={pos.id}>
                    {pos.name}
                  </MenuItem>
                ))
              : null}
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
      <Button
        style={{ width: "100%" }}
        type="submit"
        variant="contained"
        color="primary"
        endIcon={loading && <CircularProgress size={20} />}
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
