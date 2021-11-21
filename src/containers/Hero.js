import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import "../assets/styles/Hero.scss";
import SocialIcons from "../components/shared/SocialIcons";

const Hero = () => (
  <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative">
      <Animated animationIn="fadeInUp" animationInDelay={100}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Hi, I'm Brian Min</h1>
            <h2>
              <span className="text-highlight">Software Engineer</span> based in London
            </h2>
          </div>
        </div>
      </Animated>
      <Animated animationIn="fadeInUp" animationInDelay={200}>
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
            <SocialIcons />
          </div>
        </div>
      </Animated>
      <div className="row icon-boxes">
        <Animated
          className="col-lg-6 col-xl-3 d-flex align-items-stretch mb-5 mb-xl-0"
          animationIn="zoomIn"
          animationInDelay={400}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="ri-bank-line"></i>
            </div>
            <h4 className="title">Software Engineer at American Express</h4>
            <p className="description mb-3">
              Working with distributed, event-driven microservices with Go, Kafka, Kubernetes.
            </p>
            <Link className="btn-md orange" to="/about#experience">
              <i className="bx bxs-briefcase"></i> View Experience
            </Link>
          </div>
        </Animated>
        <Animated
          className="col-lg-6 col-xl-3 d-flex align-items-stretch mb-5 mb-xl-0"
          animationIn="zoomIn"
          animationInDelay={500}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="bx bxs-graduation"></i>
            </div>
            <h4 className="title">Master of Engineering in Computer Science</h4>
            <p className="description mb-3">
              Awarded a First Class Honours in MEng Computer Science at University College London
              (UCL).
            </p>
            <Link className="btn-md green" to="/about">
              <i className="bx bx-pencil"></i> About Me
            </Link>
          </div>
        </Animated>
        <Animated
          className="col-lg-6 col-xl-3 d-flex align-items-stretch mb-5 mb-xl-0"
          animationIn="zoomIn"
          animationInDelay={600}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="ri-open-source-line"></i>
            </div>
            <h4 className="title">Open Source Developer</h4>
            <p className="description mb-3">
              Started open source projects including as{" "}
              <a href="https://github.com/bymi15/react-edit-text" target="_blank" rel="noreferrer">
                react-edit-text
              </a>
              , with over <strong>1200</strong> weekly downloads on NPM and used by{" "}
              <strong>170+</strong> on Github.
            </p>
            <Link className="btn-md blue" to="/portfolio">
              <i className="bx bxs-grid-alt"></i> View Projects
            </Link>
          </div>
        </Animated>
        <Animated
          className="col-lg-6 col-xl-3 d-flex align-items-stretch mb-5 mb-xl-0"
          animationIn="zoomIn"
          animationInDelay={700}
        >
          <div className="icon-box">
            <div className="icon">
              <i className="ri-stack-line"></i>
            </div>
            <h4 className="title">Full Stack Developer</h4>
            <p className="description mb-3">
              Wide spectrum of experiences including Frontend, Backend, CI/CD, Machine Learning, and
              Virtual Environments.
            </p>
            <Link className="btn-md red" to="/skills">
              <i className="bx bx-code-alt"></i> View Skills
            </Link>
          </div>
        </Animated>
      </div>
    </div>
  </section>
);

export default Hero;
