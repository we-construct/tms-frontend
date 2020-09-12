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
import PlusOneIcon from "@material-ui/icons/PlusOne";
import MenuItem from "@material-ui/core/MenuItem";
import { useSnackbar } from "notistack";
import { addExperience } from "../../../../../Redux/Profile/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddExperience = ({ id, addExperience }) => {
  const classes = useStyles();
  const jobTimes = [
    {
      id: 1,
      name: "Full Time",
    },
    {
      id: 2,
      name: "Part Time",
    },
    {
      id: 3,
      name: "Freelance",
    },
  ];
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    name: "",
    company: "",
    jobTime: "",
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
      data.company !== "" &&
      data.jobTime !== "" &&
      data.from !== "" &&
      data.to !== ""
    ) {
      addExperience({
        ...data,
        id,
      });
      setData({
        name: "",
        company: "",
        jobTime: "",
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
        <DialogTitle>
          Add Experience
        </DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Job Name"
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
            label="Company Name"
            type="text"
            name="company"
            size="small"
            value={data.company}
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
            label="To (leave blank if still working)"
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
            <InputLabel>
              Job Type
            </InputLabel>
            <Select
              id="demo-simple-select-required"
              value={data.jobTime}
              onChange={handleChange}
              name="jobTime"
              className={classes.selectEmpty}
            >
              {jobTimes.map((type) => (
                <MenuItem key={type.id} value={type.name}>
                  {type.name}
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
    addExperience: (data) => dispatch(addExperience(data)),
  };
}

export default connect(null, mapDispatchToProps)(AddExperience);
