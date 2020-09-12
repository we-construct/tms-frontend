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
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    birthday: user.birthday.slice(0, 10),
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setData({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      birthday: user.birthday.slice(0, 10),
    });
    setError(null);
    setOpen(false);
  };
  const handleSave = () => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.phoneNumber.length < 12
    ) {
      setError("Fields error!");
    } else {
      editProfile({
        ...data,
      });
      setOpen(false);
      setError(null);
    }
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
            error={error !== null}
            helperText={error !== null ? error : null}
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
            error={error !== null}
            helperText={error !== null ? error : null}
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
            error={error !== null}
            helperText={error !== null ? error : null}
          />
          <TextField
            id="date"
            label="Birthday (MM/DD/YY)"
            type="date"
            name="birthday"
            value={data.birthday}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
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
