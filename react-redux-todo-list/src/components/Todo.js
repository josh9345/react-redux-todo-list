import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onCLick, completed, text }) => {
  return (
    <li
      id="list-item"
      className="list-group-item"
      onClick={onCLick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  onCLick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
