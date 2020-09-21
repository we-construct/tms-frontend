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
import PlusOneIcon from "@material-ui/icons/PlusOne";
import { useSnackbar } from "notistack";
import {addHardSkill} from "../../../../../Redux/Profile/actions";

const AddHardSkill = ({ id, addHardSkill }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    if (data.name !== ""){
      addHardSkill({
        id,
        ...data,
      })
      setData({
        name: "",
      });
      setOpen(false);
    }else {
      enqueueSnackbar("Enter all fields!", { variant: "error" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <PlusOneIcon className="plusOne" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add HardSkill</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Skill name"
            type="text"
            name="name"
            size="small"
            value={data.name}
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
    addHardSkill: (data) => dispatch(addHardSkill(data)),
  };
}

export default connect(null, mapDispatchToProps)(AddHardSkill);
