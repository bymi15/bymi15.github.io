import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const NotFound = () => (
  <Container style={{ height: "90vh", textAlign: "center" }}>
    <h1 style={{ paddingTop: "350px", marginBottom: "25px" }}>Page Not Found</h1>
    <Link className="filled" to="/">
      Return to Home
    </Link>
  </Container>
);

export default NotFound;
