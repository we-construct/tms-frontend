import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

const AddGoals = (props) => {
  const [state, setState] = useState({ title: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addGoal(state);
    setState({ title: "" });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex" }}
        noValidate
        autoComplete="off"
      >
        <TextField
          style={{ flex: "10" }}
          type="text"
          name="title"
          id="outlined-basic"
          size="small"
          label="Add"
          variant="outlined"
          placeholder="Add Goal..."
          value={state.title}
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Submit"
          size="medium"
          style={{ flex: "0" }}
        >
          <AddIcon />
        </Button>
      </form>
    </>
  );
};

// PropTypes
AddGoals.propTypes = {
  addGoal: PropTypes.func.isRequired,
};

export default AddGoals;
