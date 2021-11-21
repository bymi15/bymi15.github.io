import PropTypes from "prop-types";
import React from "react";
import styles from "../assets/styles/SkillSingle.module.scss";

const SkillSingle = ({ text, icon }) => (
  <li className={`${styles.skill} list-inline-item`}>
    {icon} {text}
  </li>
);

SkillSingle.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

SkillSingle.defaultProps = {
  icon: null,
};

export default SkillSingle;
