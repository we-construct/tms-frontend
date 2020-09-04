import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { editProfile } from "../../../Redux/Users/actions";
import EditIcon from "@material-ui/icons/Edit";

const EditUser = ({ user, editProfile }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
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
    editProfile({
      ...data,
    });
    setOpen(false);
  };
  return (
    <>
      <EditIcon className="editBtn" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit {user.firstName}</DialogTitle>
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
};

function mapDispatchToProps(dispatch) {
  return {
    editProfile: (data) => dispatch(editProfile(data)),
  };
}

export default connect(null, mapDispatchToProps)(EditUser);
