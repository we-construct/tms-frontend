import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, TextField, Snackbar, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiAlert from "@material-ui/lab/Alert";
import style from "./style.module.scss";

const GoalItem = ({ goal, markComplete, delGoal }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { id, title, completed } = goal;

  return (
    <div className={style.goal}>
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            <span>
              You are completed
              <i>
                <b>"{title}"</b>
              </i>
              goal!
            </span>
          </Alert>
        </Snackbar>
        <Typography
          label="Goal"
          className={goal.completed ? style.titleComplete : style.title}
        >
          {title}
        </Typography>
      </div>
      <div>
        <TextField
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          type="checkbox"
          onChange={() => markComplete(id)}
          checked={completed ? true : false}
          onClick={handleClick}
          className={style.check}
        />
      </div>
      <div>
        <DeleteIcon
          onClick={() => delGoal(id)}
          color="secondary"
          className={style.delIcon}
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
