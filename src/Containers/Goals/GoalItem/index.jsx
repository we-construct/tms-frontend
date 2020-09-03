import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      fontFamily: "Arial, Helvetica, sans-serif",
      textDecoration: this.props.todo.completed
        ? "line-through #f50057"
        : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed ? "checked" : ""}
          />
          {title}
          <span style={{ float: "right" }}>
            <IconButton aria-label="delete">
              <DeleteIcon
                onClick={this.props.delTodo.bind(this, id)}
                color="secondary"
              />
            </IconButton>
          </span>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
