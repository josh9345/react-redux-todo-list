import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        className="btn btn-secondary"
        onClick={onClick}
        disabled={active}
        style={{ marginLeft: "4px" }}
      >
        {children}
      </button>
    </div>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
