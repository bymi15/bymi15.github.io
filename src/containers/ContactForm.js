import React from "react";
import { Button, Col, Form, FormGroup, Input, Row, Spinner } from "reactstrap";
import styles from "../assets/styles/ContactForm.module.scss";
import SocialIcons from "../components/shared/SocialIcons";
import config from "../config";

const ContactForm = () => {
  const [status, setStatus] = React.useState("");

  const handleFormSubmit = (e) => {
    setStatus("loading");
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", config.CONTACT_FORM_URL);
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
                <span className="iconify-inline" data-icon="bi:send-fill"></span>
                <span className="ms-1">Send Message</span>
              </Button>
            </FormGroup>
          </Form>
        );
    }
  };

  return (
    <div className={styles.contactDiv}>
      <Row>
        <Col lg="6">
          <h3 className="heading mb-2">Connect with me</h3>
          <div className="underLine"></div>
          <p>
            Feel free to send me a message or connect with me through social networking platforms.
            Whether you want to talk about a potential job opportunity or project collaboration,
            please get in touch with me. I'd love to hear from you!
          </p>
          <SocialIcons />
        </Col>
        <Col lg="6" className="mt-5 mt-lg-0">
          <h3 className="heading mb-2">Send a message</h3>
          <div className="underLine"></div>
          {renderForm()}
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
