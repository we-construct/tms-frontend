import React from "react";
import uuid from "uuid";
// Importing Components
import Goal from "./Goal/index";
import Header from "./GoalsHeader/index";
import AddGoals from "./AddGoals/index";
import PageWrapper from "../../Components/PageWrapper/index";
import { useState } from "react";

const Goals = () => {
  const [state, setState] = useState({
    goals: [
      { title: "Learning any new language", id: 1, date: new Date() },
      { title: "Improve knowledge of English", id: 2, date: new Date() },
      { title: "Become a full-cycle developer", id: 3, date: new Date() },
    ],
  });

  // Toggle Complete
  const markComplete = (id) => {
    setState({
      goals: state.goals.map((goal) => {
        if (goal.id === id) {
          goal.completed = !goal.completed;
        }
        return goal;
      }),
    });
  };

  // Delete goal
  const delGoal = (id) => {
    setState({
      goals: [...state.goals.filter((goal) => goal.id !== id)],
    });
  };

  const addGoal = (title) => {
    const newgoal = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    setState({ goals: [...state.goals, newgoal] });
  };

  return (
    <PageWrapper>
      <Header />
      <AddGoals addGoal={addGoal} />
      <Goal goals={state.goals} markComplete={markComplete} delGoal={delGoal} />
    </PageWrapper>
  );
};

export default Goals;
