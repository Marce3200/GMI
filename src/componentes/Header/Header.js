import React from "react";
import logo from "../img/logo.png";
import "../Header/header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Header = () => {
  return (
    <Container fluid className="  p-0">
      <Row className="logosection">
        <Col className="text-center">
          <img className="logo" src={logo} />
          <p className="bajada-header">
            {" "}
            Gestionamos tu propiedad en Providencia
          </p>
          <center>
            <Form className="form-mail">
              <Form.Group
                className="mb-3 text-center"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subscríbete para recibir más información</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  size="sm"
                  className="mt-3"
                />
              </Form.Group>
            </Form>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
