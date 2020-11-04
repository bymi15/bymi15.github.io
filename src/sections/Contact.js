import React from "react";
import { Spinner, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import styles from "../assets/styles/Contact.module.scss";
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [status, setStatus] = React.useState("");

  const handleFormSubmit = (e) => {
    setStatus("loading");
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/mrgyvnnj");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    };
    xhr.send(data);
  };

  const renderForm = () => {
    switch (status) {
      case "loading":
        return (
          <div className="mt-4 pt-3 mb-4 pb-3 text-center">
            <Spinner color="primary" />
          </div>
        );
      case "success":
        return <div className="text-secondary">Your message has been sent successfully!</div>;
      case "error":
        return (
          <div className="text-secondary">
            Your message could not be sent. Please try again later!
          </div>
        );
      default:
        return (
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Input type="text" name="name" id="name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="message"
                id="message"
                rows="3"
                placeholder="Write your message..."
                required
              />
            </FormGroup>
            <FormGroup>
              <Button color="success" type="submit">
                Send Message
              </Button>
            </FormGroup>
          </Form>
        );
    }
  };

  return (
    <section id="contact">
      <div className={styles.contactDiv}>
        <Row>
          <Col sm="12" md="6">
            <h3 className="mb-4">Send A Message</h3>
            <div className={styles.underLine}></div>
            {renderForm()}
          </Col>
          <Col sm="12" md="6">
            <h3 className="mb-4">Connect with me</h3>
            <div className={styles.underLine}></div>
            <div>
              Feel free to send me a message or connect with me through social networking platforms.
              Whether you want to talk about a project collaboration, or just get in touch with me,
              I'd love to hear from you!
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
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
