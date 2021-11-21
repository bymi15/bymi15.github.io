import React from "react";
import { Animated } from "react-animated-css";
import { Container } from "reactstrap";
import styles from "../assets/styles/Portfolio.module.scss";
import Projects from "../containers/Projects";

const Portfolio = () => (
  <>
    <Animated className={styles.portfolioContainer} animationIn="fadeIn" animationInDelay={50}>
      <Container className="pad-top">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Explore my projects and various applications I've built</p>
        </div>
        <Projects />
      </Container>
    </Animated>
  </>
);

export default Portfolio;
