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
import {deleteHardSkill, editHardSkill} from "../../../../../Redux/Profile/actions";
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles} from "@material-ui/core/styles";
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

const EditHardSkill = ({ id, skills, deleteHardSkill, editHardSkill }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    selectedSkillId: '',
  });
  const [selectedSkill, setSelectedSkill] = useState({
    id: '',
    name: '',
  })

  useEffect(() => {
    skills.find((skill) => skill.id === data.selectedSkillId && setSelectedSkill(skill))
    // eslint-disable-next-line
  }, [data.selectedSkillId])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    if (data.name !== "") {
      editHardSkill({
        id: selectedSkill.id,
        name: data.name,
        userId: id,
      })
      setData({
        name: "",
        selectedSkillId: '',
      });
      setSelectedSkill({
        id: '',
        name: '',
      })
    }
  };
  const handleDelete = () => {
    deleteHardSkill({
      ...selectedSkill,
      userId: id,
    })
    setData({
      name: "",
      selectedSkillId: '',
    });
    setSelectedSkill({
      id: '',
      name: '',
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <EditIcon className="plusOne editIcon" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit SoftSkill</DialogTitle>
        <DialogContent>
          <FormControl required className={classes.formControl}>
            <InputLabel>
              Skill
            </InputLabel>
            <Select
              id="demo-simple-select-required"
              value={data.selectedSkillId}
              onChange={handleChange}
              name='selectedSkillId'
              className={classes.selectEmpty}
            >
              {skills.map((skill) => (
                <MenuItem key={skill.id} value={skill.id}>
                  {skill.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Select skill for edit/delete</FormHelperText>
            {
              selectedSkill.id !== '' && (
                <>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    label={selectedSkill.name}
                    helperText="Enter new skill name"
                    type="text"
                    name="name"
                    size="small"
                    value={data.name}
                    onChange={handleChange}
                  />
                </>
              )
            }
          </FormControl>
        </DialogContent>
        <DialogActions>
          {
            selectedSkill.id !== '' &&
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
          }
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
    deleteHardSkill: (data) => dispatch(deleteHardSkill(data)),
    editHardSkill: (data) => dispatch(editHardSkill(data)),
  };
}

export default connect(null, mapDispatchToProps)(EditHardSkill);
