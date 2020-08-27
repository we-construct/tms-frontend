import React, { useState } from "react";
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EditUser = ({ user, roles, positions, statuses}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
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
          Edit {user.first_name} data?
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
          <Button onClick={handleClose} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => ({
  roles: state.adminData.roles,
  positions: state.adminData.positions,
  statuses: state.adminData.statuses,
});

export default connect(mapStateToProps, null)(EditUser);
