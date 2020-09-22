import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent, FormControl, InputLabel, Select, FormHelperText,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from "@material-ui/core/MenuItem";
import { deleteExperience, editExperience } from "../../../../../Redux/Profile/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

const EditExperience = ({ userId, experienceItem, deleteExperience, editExperience }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: experienceItem.name,
    company: experienceItem.company,
    jobTime: experienceItem.jobtime,
    from: experienceItem.from_date.slice(0,10),
    to: experienceItem.to_date.slice(0,10),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    editExperience({
      ...data,
      id: experienceItem.id,
      userId,
    })
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleDelete = () => {
    deleteExperience({
      userId,
      id: experienceItem.id,
    })
  }
  return (
    <>
      <MoreVertIcon className='editEducationIcon' onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Experience</DialogTitle>
        <DialogContent>
          <FormControl required className={classes.formControl}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Company name"
              type="text"
              name="company"
              size="small"
              value={data.company}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Job name"
              type="text"
              name="name"
              size="small"
              value={data.name}
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
            <Select
              value={data.jobTime}
              onChange={handleChange}
              name="jobTime"
              className={classes.selectEmpty}
            >
              {jobTimes.map((job) => (
                <MenuItem key={job.id} value={job.name}>
                  {job.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="small"
            style={{
              marginRight: "8px",
            }}
            color="secondary"
            onClick={handleDelete}
          >
            Delete
          </Button>
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
    deleteExperience: (data) => dispatch(deleteExperience(data)),
    editExperience: (data) => dispatch(editExperience(data)),
  };
}

export default connect(null, mapDispatchToProps)(EditExperience);
