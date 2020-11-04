import React from "react";
import { Navbar } from "reactstrap";
import style from "../assets/styles/Sidebar.module.scss";
import profileImg from "../assets/img/profile.jpg";
import {
  faUser,
  faCode,
  faDesktop,
  faCogs,
  faFilePdf,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmoothScrollLink from "./SmoothScrollLink";

const Sidebar = () => (
  <Navbar className={`${style.nav} ${style.bgGradient} navbar-dark navbar-expand-lg fixed-top`}>
    <SmoothScrollLink className={`${style.navBrand} navbar-brand`} to="about">
      <span className="d-block d-lg-none">Brian Min</span>
      <span className="d-none d-lg-block">
        <img
          className={`${style.imgProfile} img-fluid rounded-circle mx-auto mb-2`}
          src={profileImg}
          alt="profile"
        />
      </span>
    </SmoothScrollLink>
    <button
      className={`${style.navToggler} navbar-toggler`}
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${style.navCollapse}`} id="navbarSupportedContent">
      <ul className={`navbar-nav ${style.navList}`}>
        <li className={`nav-item ${style.navItem}`}>
          <SmoothScrollLink className={style.navLink} to="about">
            <FontAwesomeIcon icon={faUser} /> About
          </SmoothScrollLink>
        </li>
        <li className={`nav-item ${style.navItem}`}>
          <SmoothScrollLink className={style.navLink} to="experience">
            <FontAwesomeIcon icon={faCode} /> Experience
          </SmoothScrollLink>
        </li>
        <li className={`nav-item ${style.navItem}`}>
          <SmoothScrollLink className={style.navLink} to="projects">
            <FontAwesomeIcon icon={faDesktop} /> Projects
          </SmoothScrollLink>
        </li>
        <li className={`nav-item ${style.navItem}`}>
          <SmoothScrollLink className={style.navLink} to="skills">
            <FontAwesomeIcon icon={faCogs} /> Skills
          </SmoothScrollLink>
        </li>
        <li className={`nav-item ${style.navItem}`}>
          <SmoothScrollLink className={style.navLink} to="contact">
            <FontAwesomeIcon icon={faAddressBook} /> Contact
          </SmoothScrollLink>
        </li>
        <li className={`nav-item ${style.navItem}`}>
          <a
            className={style.navLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!window.confirm("Do you wish to download the CV / Résumé?")) {
                e.preventDefault();
              }
            }}
            href="https://github.com/bymi15/bymi15.github.io/raw/master/docs/BrianMin_CV_Resume.pdf"
          >
            <FontAwesomeIcon icon={faFilePdf} /> CV / Résumé
          </a>
        </li>
      </ul>
    </div>
  </Navbar>
);

export default Sidebar;
