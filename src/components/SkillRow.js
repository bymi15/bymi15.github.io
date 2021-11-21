import PropTypes from "prop-types";
import React from "react";

const SkillRow = ({ className, children }) => (
  <ul className={`${className} list-inline`}>{children}</ul>
);

SkillRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillRow;
