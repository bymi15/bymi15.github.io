import React from "react";
import { Animated } from "react-animated-css";
import { Container } from "reactstrap";
import ContactForm from "../containers/ContactForm";

const Contact = () => (
  <Animated animationIn="fadeIn" animationInDelay={50}>
    <Container className="pad-top" style={{ height: "90vh" }}>
      <div className="section-title">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me for any enquiries</p>
      </div>
      <ContactForm />
    </Container>
  </Animated>
);

export default Contact;
