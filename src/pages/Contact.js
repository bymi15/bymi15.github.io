import React from "react";
import { Animated } from "react-animated-css";
import { Container } from "reactstrap";
import styles from "../assets/styles/Contact.module.scss";
import ContactForm from "../containers/ContactForm";

const Contact = () => (
  <Animated className={styles.contactContainer} animationIn="fadeIn" animationInDelay={50}>
    <Container className="pad-top">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me for any enquiries</p>
      </div>
      <ContactForm />
    </Container>
  </Animated>
);

export default Contact;
