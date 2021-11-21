import React from "react";
import { Animated } from "react-animated-css";
import { Col, Container, Row } from "reactstrap";
import profileImage from "../assets/img/about.jpg";
import styles from "../assets/styles/About.module.scss";
import ScrollDownButton from "../components/shared/ScrollDownButton";
import SocialIcons from "../components/shared/SocialIcons";
import Education from "../containers/Education";
import Experience from "../containers/Experience";

const About = () => (
  <Animated animationIn="fadeIn" animationInDelay={50}>
    <Container className="pad-top">
      <div className="section-title">
        <h2>About</h2>
        <p>Find out about my background and experiences</p>
      </div>
      <Row>
        <Col lg="8">
          <div className={styles.about}>
            <h3 className="heading">Background</h3>
            <div className="underLine"></div>
            <p>
              Hi, my name is Brian Min (민병헌) and I'm a full-time software engineer currently
              based in London. I was born in Seoul, Korea and raised in Bangkok, Thailand where I
              attended Bangkok Patana School and completed the IB Diploma. In 2015, I moved to
              London to study for the Master of Engineering Computer Science Degree at University
              College London (UCL). Between 2017 and 2019 I interrupted my studies and served my
              national duty as a paratrooper for the Republic of Korea Marine Corps. I then
              graduated in 2021 with a First Class Honours and joined American Express as a graduate
              software engineer.
            </p>
            <p className="mt-3">
              I have experience in various fields of software engineering ranging from full-stack
              web development to 3D virtual spaces. I try not to limit myself to a specific field as
              I enjoy constantly learning new skills and applying my previous experiences to solve
              new problems and deliver a valuable experience. My strengths include being able to
              quickly learn new technologies, a passion for writing clean and scalable code, and a
              desire for delivering high quality products.
            </p>
            <p className="mt-3">
              Recently I've been working with the following technologies:
              <ul className={styles.list}>
                <li>React Hooks</li>
                <li>Go</li>
                <li>Kafka</li>
                <li>Kubernetes</li>
                <li>Cucumber (BDD)</li>
              </ul>
            </p>
            <div className={styles.centerMd}>
              <SocialIcons />
            </div>
          </div>
        </Col>
        <Col lg="4" className="text-center">
          <img className={styles.profile} src={profileImage} alt="profile" />
        </Col>
      </Row>
      <ScrollDownButton href="#experience" />
      <div className="divider" />
      <Row>
        <Col lg="6">
          <h3 id="experience" className="heading">
            Experience
          </h3>
          <div className="underLine"></div>
          <Experience />
        </Col>
        <Col lg="6" className="mt-4 mt-lg-0">
          <h3 id="education" className="heading">
            Education
          </h3>
          <div className="underLine"></div>
          <Education />
        </Col>
      </Row>
    </Container>
  </Animated>
);

export default About;
