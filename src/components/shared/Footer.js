import React from "react";
import "../../assets/styles/Footer.scss";
import config from "../../config";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="credits">
              Developed by{" "}
              <a href={config.GITHUB_URL} target="_blank" rel="noreferrer">
                Brian Min
              </a>
            </div>
          </div>
          <div className="text-center text-md-right pt-3 pt-md-0">
            <SocialIcons />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
