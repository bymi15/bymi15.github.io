import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const SmoothScrollLink = ({ className, to, children }) => (
  <Link className={className} activeClass="active" to={to} spy={true} smooth={true} duration={600}>
    {children}
  </Link>
);

SmoothScrollLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SmoothScrollLink;
