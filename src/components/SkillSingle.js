import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../assets/styles/SkillSingle.module.scss";

const SkillSingle = ({ text, icon }) => (
  <li className={`${styles.skill} list-inline-item`}>
    {icon && <FontAwesomeIcon icon={icon} />} {text}
  </li>
);

SkillSingle.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

SkillSingle.defaultProps = {
  icon: null,
};

export default SkillSingle;
