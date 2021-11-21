import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar as NavbarRS, NavbarBrand, NavbarToggler } from "reactstrap";
import "../../assets/styles/Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header id="header" className="fixed-top">
        <NavbarRS id="navbar" className="navbar navbar-expand-lg navbar-light container">
          <NavbarBrand className="logo" href="/">
            Brian <span>Min</span>
          </NavbarBrand>
          <NavbarToggler className="me-2" onClick={() => setOpen((prevState) => !prevState)} />
          <Collapse isOpen={open} navbar>
            <Nav className="ms-auto" navbar>
              <li>
                <NavLink to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <Link className="filled" target="_blank" to="/storage/BrianMin_Resume.pdf">
                  View Résumé
                </Link>
              </li>
            </Nav>
          </Collapse>
        </NavbarRS>
      </header>
    </>
  );
};

export default Navbar;
