import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, TextField, Snackbar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiAlert from "@material-ui/lab/Alert";

const GoalItem = ({ goal, markComplete, delGoal }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getStyle = () => {
    return {
      display: "flex",
      justifyContent: "space-between",
      margin: "8px 0",
      background: "#F4F4F4",
      padding: "5px",
      borderBottom: "1px #000 dotted",
      fontFamily: "Arial, Helvetica, sans-serif",
      textDecoration: goal.completed ? "line-through #f50057" : "none",
    };
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { id, title, completed } = goal;

  const defaultValueDate = new Date();

  return (
    <div style={getStyle()}>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            <span>
              You are completed{" "}
              <i>
                <b>"{title}"</b>{" "}
              </i>{" "}
              goal!
            </span>
          </Alert>
        </Snackbar>
        <TextField
          id="goal"
          value={title}
          label="Goal"
          InputProps={{
            readOnly: true,
          }}
          style={{ width: "500px" }}
        />
      </div>
      <div>
        <TextField
          style={{ padding: "0px" }}
          id="date"
          label="Due date"
          type="date"
          defaultValue={defaultValueDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <Checkbox
          style={{ margin: "15px 0px 0px 0px" }}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          type="checkbox"
          onChange={markComplete.bind(this, id)}
          checked={completed ? "checked" : ""}
          onClick={handleClick}
        />
      </div>
      <div>
        <DeleteIcon
          onClick={delGoal.bind(this, id)}
          color="secondary"
          style={{ margin: "25px 0px 0px 0px" }}
        />
      </div>
    </div>
  );
};

// PropTypes
GoalItem.propTypes = {
  goals: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delgoal: PropTypes.func.isRequired,
};

export default GoalItem;
