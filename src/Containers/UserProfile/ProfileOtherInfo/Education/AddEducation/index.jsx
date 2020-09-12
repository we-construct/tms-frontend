import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import MenuItem from "@material-ui/core/MenuItem";
import { addEducation } from "../../../../../Redux/Profile/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddEducation = ({ id, addEducation }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const grades = [
    {
      id: 1,
      name: "Bachelor",
    },
    {
      id: 2,
      name: "Master",
    },
    {
      id: 3,
      name: "PhD",
    },
  ];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    faculty: "",
    grade: "",
    from: "",
    to: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    if (
      data.name !== "" &&
      data.faculty !== "" &&
      data.grade !== "" &&
      data.from !== "" &&
      data.to !== ""
    ) {
      addEducation({
        ...data,
        id,
      });
      setData({
        name: "",
        faculty: "",
        grade: "",
        from: "",
        to: "",
      });
      setOpen(false);
    } else {
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
        <DialogTitle id="alert-dialog-title">Add Education</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Institute Name"
            type="text"
            name="name"
            size="small"
            value={data.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Faculty"
            type="text"
            name="faculty"
            size="small"
            value={data.faculty}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="From"
            type="date"
            name="from"
            required
            fullWidth
            margin="normal"
            size="small"
            value={data.from}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="To"
            type="date"
            name="to"
            required
            fullWidth
            margin="normal"
            size="small"
            value={data.to}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl required className={classes.formControl}>
            <InputLabel>Grade</InputLabel>
            <Select
              value={data.grade}
              onChange={handleChange}
              name="grade"
              className={classes.selectEmpty}
            >
              {grades.map((grade) => (
                <MenuItem key={grade.id} value={grade.name}>
                  {grade.name}
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
};

function mapDispatchToProps(dispatch) {
  return {
    addEducation: (data) => dispatch(addEducation(data)),
  };
}

export default connect(null, mapDispatchToProps)(AddEducation);