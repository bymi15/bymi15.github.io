import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const CheckList = ({ className, items }) => (
  <ul className={`${className} fa-ul`}>
    {items &&
      items.map((item) => (
        <li key={item}>
          <FontAwesomeIcon className="fa-li" style={{ color: "#2188d1" }} icon={faCheck} /> {item}
        </li>
      ))}
  </ul>
);

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckList;
