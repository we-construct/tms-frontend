import React, { useState } from "react";
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Dialog, DialogActions, DialogTitle, DialogContent, InputLabel, FormHelperText, FormControl, Select } from "@material-ui/core";
import { updateUser } from "../../../../Redux/APanel/actions";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EditUser = ({ user, roles, positions, statuses, page, updateUser}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [data, setData] = useState({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phoneNumber: user.phone_number,
    roleId: user.roleid,
    positionId: user.positionid,
    statusId: user.statusid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    updateUser({
      ...data,
      page,
    })
  }

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        style={{ marginRight: "8px" }}
        onClick={handleClickOpen}
      >
        Edit {user.first_name}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit {user.first_name}
        </DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="First Name"
            type="text"
            name="firstName"
            size="small"
            value={data.firstName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            type="text"
            name="lastName"
            size="small"
            value={data.lastName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="text"
            name="email"
            size="small"
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            type="text"
            name="phoneNumber"
            size="small"
            value={data.phoneNumber}
            onChange={handleChange}
          />
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={data.roleId}
              onChange={handleChange}
              name='roleId'
              className={classes.selectEmpty}
            >
            {roles.map((role) => (
            <MenuItem key={role.id} value={role.id}>
              {role.name}
            </MenuItem>
          ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Position</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={data.positionId}
              onChange={handleChange}
              name='positionId'
              className={classes.selectEmpty}
            >
              {positions.map((pos) => (
            <MenuItem key={pos.id} value={pos.id}>
              {pos.name}
            </MenuItem>
          ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={data.statusId}
              onChange={handleChange}
              name='statusId'
              className={classes.selectEmpty}
            >
            {statuses.map((stat) => (
            <MenuItem key={stat.id} value={stat.id}>
              {stat.name}
            </MenuItem>
          ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Discard
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (data) => dispatch(updateUser(data)),
  };
}

const mapStateToProps = (state) => ({
  roles: state.adminData.roles,
  positions: state.adminData.positions,
  statuses: state.adminData.statuses,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
