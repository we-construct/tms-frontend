import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

const AddGoals = ({ addGoal }) => {
  const [state, setState] = useState({ title: "" });
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    if (state.title !== "") {
      addGoal(state);
      setState({ title: "" });
      setError(null);
    } else {
      setError("Enter empty field!");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        style={{ flex: "10" }}
        type="text"
        name="title"
        size="small"
        label="Add"
        variant="outlined"
        placeholder="Add Goal..."
        value={state.title}
        onChange={(e) => setState(e.target.value)}
        error={error !== null}
        helperText={error !== null ? error : null}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        value="Submit"
        size="medium"
        style={{ flex: "0", height: "40px" }}
        onClick={onSubmit}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

// PropTypes
AddGoals.propTypes = {
  addGoal: PropTypes.func,
};

export default AddGoals;
