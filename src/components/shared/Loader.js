import React from "react";
import { Container, Row, Spinner } from "reactstrap";
import styles from "../../assets/styles/Loader.module.scss";

const Loader = ({ fullScreen, style }) => (
  <Container
    fluid
    className="d-flex"
    style={
      fullScreen ? { height: "100vh", width: "100vw", background: "#fff" } : { background: "#fff" }
    }
  >
    <Row className="justify-content-center align-self-center w-100 text-center" style={style}>
      <Spinner className={styles.spinnerPrimary} />
    </Row>
  </Container>
);

export default Loader;
