import React from "react";
import PropTypes from "prop-types";
import GoalItem from "../GoalItem/index";

const Goals = ({ markComplete, delGoal, goals }) => {
  return goals.map((goal) => (
    <GoalItem
      key={goal.id}
      goal={goal}
      markComplete={markComplete}
      delGoal={delGoal}
    />
  ));
};

// PropTypes
Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delgoal: PropTypes.func.isRequired,
};

export default Goals;
