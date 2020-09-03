import React, { Component } from "react";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Importing Components
import Goal from "./Goal/index";
import Header from "./GoalsHeader/index";
import AddGoals from "./AddGoals/index";
import PageWrapper from "../../Components/PageWrapper/index";

class Goals extends Component {
  state = {
    todos: [
      { title: "Learning any new language", id: 1 },
      { title: "Improve knowledge of English", id: 2 },
      { title: "Become a full-cycle developer", id: 3 },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <PageWrapper>
        <Router>
          <div>
            <Header />
            <br />
            <Route
              exact
              path="/goals"
              render={(props) => (
                <React.Fragment>
                  <AddGoals addTodo={this.addTodo} />
                  <Goal
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
          </div>
        </Router>
      </PageWrapper>
    );
  }
}

export default Goals;
