import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, TextField, Snackbar, Typography } from "@material-ui/core";
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
      alignItems: "center",
      margin: "8px 0",
      background: "#F4F4F4",
      padding: "5px",
      // borderBottom: "1px #000 dotted",
      fontFamily: "Arial, Helvetica, sans-serif",
      textDecoration: goal.completed ? "line-through #f50057" : "none",
    };
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { id, title, completed } = goal;

  return (
    <div style={getStyle()}>
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            style={{ margin: "0" }}
          >
            <span>
              You are completed
              <i>
                <b>"{title}"</b>
              </i>
              goal!
            </span>
          </Alert>
        </Snackbar>
        <Typography label="Goal" style={{ padding: "0px" }}>
          {title}
        </Typography>
      </div>
      <div>
        <TextField
          style={{ padding: "0px" }}
          // label="Due date"
          type="date"
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
          checked={completed ? true : false}
          onClick={handleClick}
        />
      </div>
      <div>
        <DeleteIcon
          onClick={delGoal.bind(this, id)}
          color="secondary"
          style={{ margin: "20px 10px 0px 0px" }}
        />
      </div>
    </div>
  );
};

// PropTypes
GoalItem.propTypes = {
  goals: PropTypes.object,
  markComplete: PropTypes.func,
  delgoal: PropTypes.func,
};

export default GoalItem;
