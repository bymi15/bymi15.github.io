import PropTypes from "prop-types";
import React from "react";

const CheckList = ({ className, items }) => (
  <ul className={`${className} p-0 m-0`} style={{ listStyleType: "none" }}>
    {items &&
      items.map((item) => (
        <li key={item}>
          <i className="ri-check-line" style={{ color: "#2188d1" }}></i> {item}
        </li>
      ))}
  </ul>
);

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckList;
