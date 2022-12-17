import React from "react";
import logo from "../img/logo.png";
import "../Footer/footer.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Footer = () => {
  return (
    <Container fluid className="main-footer">
      <center> <Row>
        <Col sm={12} md={4} lg={4} className="mt-3 mb-3"> 
          <img className="logo-footer" src={logo} alt="logo" />
        </Col>
        
        <Col sm={12} md={4} lg={4} className="mt-3 mb-3">
          <p className="titulo-footer">Ven a visitarnos</p>
          <ul className="list-unstyled">
            <li>+569 96854511</li>
            <li></li>
            <li>Santiago, Chile</li>
          </ul>
        </Col>
       
        <Col sm={12} md={4} lg={4} className="mt-3 mb-3">
          <p className="titulo-footer">Aquí estamos</p>
          <ul className="list-unstyled">
            <li>
              <a href="/contacto" className="links-footer">
                Contacto
              </a>
            </li>
            <li>
              <a href="/servicios" className="links-footer">
                Servicios
              </a>
            </li>
            <li>
              <a href="/quienes-somos" className="links-footer">
                Nosotros
              </a>
            </li>
          </ul>
        </Col>

        </Row></center>
        <hr className="hr" />
        <Row>
          <p className="texto-derechos col-sm">
            &copy;2022 @coding4u.cl - Todos los derechos reservados 
          </p>
        </Row>
      
    </Container>
  );
};

export default Footer;
