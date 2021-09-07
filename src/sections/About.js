import React from "react";
import styles from "../assets/styles/About.module.scss";
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => (
  <section id="about">
    <div>
      <h1>
        Hi, I'm
        <span className={styles.nameText}> Brian Min</span>
      </h1>
      <h3 className={styles.subText}>Graduate Software Engineer at American Express</h3>
      <div className={styles.desc}>
        <p>
          I'm a full-time software engineer based in London currently working at American Express.
        </p>
        <p>I like to spend my free time on:</p>
        <ul>
          <li>
            Building <strong>full stack web applications</strong> as a side project
          </li>
          <li>
            Working on <strong>open source projects</strong> such as{" "}
            <a href="https://brianmin.tech/react-edit-text">react-edit-text</a>
          </li>
          <li>
            Solving <strong>algorithms and data structure</strong> problems on competitive
            programming platforms such as Codeforces and Leetcode.
          </li>
          <li>
            Exploring other areas including <strong>game engine</strong> development with Java, C++,
            and OpenGL, and building <strong>3D VR/AR environments</strong> with Unity3D and C#.
          </li>
        </ul>
        <p>
          If you have any questions or would like to know more about my projects, feel free to get
          in touch and we can have a conversation.
        </p>
      </div>
      <div className={styles.socialDiv}>
        <a
          className={styles.socialIcon + " " + styles.github}
          href="https://github.com/bymi15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={styles.socialIcon + " " + styles.linkedin}
          href="https://www.linkedin.com/in/bymi15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className={styles.socialIcon + " " + styles.stackoverflow}
          href="https://stackoverflow.com/users/6213508/brian-min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          className={styles.socialIcon + " " + styles.facebook}
          href="https://www.facebook.com/bymi15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          className={styles.socialIcon + " " + styles.email}
          href="mailto:bymi15@yahoo.com?Subject=bymi15.github.io%20-%20Enquiry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </section>
);

export default About;
