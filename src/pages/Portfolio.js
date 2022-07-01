import React from "react";
import { Animated } from "react-animated-css";
import { Container } from "reactstrap";
import Projects from "../containers/Projects";

const Portfolio = () => (
  <>
    <Animated className="mb-2" animationIn="fadeIn" animationInDelay={50}>
      <Container fluid className="pad-top">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Explore my projects and applications I've built with various technologies</p>
        </div>
        <Projects />
      </Container>
    </Animated>
  </>
);

export default Portfolio;
