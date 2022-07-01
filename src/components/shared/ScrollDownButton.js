import React from "react";
import styles from "../../assets/styles/ScrollDownButton.module.scss";

const ScrollDownButton = ({ href }) => (
  <div className={styles.scrollDownButton}>
    <a href={href}>
      <span></span>
    </a>
  </div>
);

export default ScrollDownButton;
