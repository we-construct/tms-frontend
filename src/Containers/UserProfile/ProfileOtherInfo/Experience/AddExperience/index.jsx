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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddEducation = ({ id, length }) => {
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
  const [data, setData] = useState({
    id: length + 1,
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
    setOpen(false);
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
        <DialogTitle id="alert-dialog-title">
          Add Experience №{data.id}
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
            <InputLabel id="demo-simple-select-required-label">
              Job Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
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

// function mapDispatchToProps(dispatch) {
//   return {
//     editProfile: (data) => dispatch(editProfile(data)),
//   };
// }

export default connect(null, null)(AddEducation);
