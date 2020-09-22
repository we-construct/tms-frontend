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
import {deleteEducation, editEducation} from "../../../../../Redux/Profile/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

const EditEducation = ({ userId, educationItem, deleteEducation, editEducation }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: educationItem.name,
    faculty: educationItem.faculty,
    from: educationItem.from_date.slice(0,10),
    to: educationItem.to_date.slice(0,10),
    grade: educationItem.grade,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    editEducation({
      ...data,
      id: educationItem.id,
      userId,
    })
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleDelete = () => {
    deleteEducation({
      userId,
      id: educationItem.id,
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
        <DialogTitle id="alert-dialog-title">Edit SoftSkill</DialogTitle>
        <DialogContent>
          <FormControl required className={classes.formControl}>
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
    deleteEducation: (data) => dispatch(deleteEducation(data)),
    editEducation: (data) => dispatch(editEducation(data)),
  };
}

export default connect(null, mapDispatchToProps)(EditEducation);
