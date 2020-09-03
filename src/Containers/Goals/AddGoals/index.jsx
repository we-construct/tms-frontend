import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export class AddGoals extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
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
          value={this.state.title}
          onChange={this.onChange}
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
    );
  }
}

// PropTypes
AddGoals.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddGoals;
