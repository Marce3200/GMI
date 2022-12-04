import React from "react";
import Card from "react-bootstrap/Card";
import "../Servicios/servicios.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Servicios = () => {
  return (
    <Container fluid className="seccion-servicio text-center">
      <Row>
        <p className="titulo-seccion">Nuestros Servicios</p>

        <Col sm={12} md={6}>
          <Card className="card-servicio" style={{height:"90%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={SUSHI1} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-sign-hanging fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Corretaje de Propiedades
              </Card.Title>
              <ListGroup.Item className="text-card">
                Compra/venta y arriendo de distintos bienes Inmuebles (casas,
                deptos, comercios, oficinas, terrenos etc.)
              </ListGroup.Item>
              <ListGroup.Item className="text-card">
              Publicación de las propiedades en los más importantes portales de
              venta y arriendo del país (portal inmobiliario, yapo, redes
              sociales, etc).
              </ListGroup.Item>
              <ListGroup.Item className="text-card">
              Asesoría calificada de inversión y rentabilidad de
              los distintos Bienes Inmuebles.
              </ListGroup.Item>
              <ListGroup.Item className="text-card">
              Atención personalizada.
              </ListGroup.Item>
              <ListGroup.Item className="text-card"> 
              Evaluación financiera y legal de arrendatarios. 
              </ListGroup.Item>
              <ListGroup.Item className="text-card"> 
              Protocolos estrictos de
              evaluación de arrendatarios.
              </ListGroup.Item>
              
            </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="card-servicio" style={{height:"90%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi2} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-house-circle-check fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Administración de Propiedades
              </Card.Title>

              <ListGroup.Item  className="text-card">
                Múltiples contratos de administración. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Administración de
                viviendas, departamentos, comercios y oficinas. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Cobro mensual de
                arriendo y supervisión de gastos y mantenciones de las
                propiedades. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Protocolos estrictos de evaluación de
                arrendatarios. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Altos estándares de calidad. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Resguardo de
                rentabilidad y patrimonio de nuestros clientes.
              </ListGroup.Item>
              </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="card-servicio" style={{height:"90%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi6} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-file-contract fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Servicios Legales Inmobiliarios
              </Card.Title>
              <ListGroup.Item  className="text-card">
                Estudio de títulos y Redacción de escrituras (compraventa,
                sesión de derechos, etc.) 
                
                </ListGroup.Item>
                <ListGroup.Item  className="text-card">
                  Posesiones Efectivas y Herencias
                (Servicios de Trámites en Registro Civil y CBR) 
                </ListGroup.Item>
                <ListGroup.Item  className="text-card">
                Asesoría Legal
                Inmobiliaria
                </ListGroup.Item>
              
              </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="card-servicio" style={{height:"90%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi7} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-scale-balanced fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Estudios y Tasaciones
              </Card.Title>
              <ListGroup.Item  className="text-card">
                Tasación
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Análisis de
                rentabilidad de Bienes Inmuebles.
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                 Estudios de Cabida: Análisis de
                Aspectos normativos. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Estudios de mercado de ventas y arriendos,
                oferta y/o demanda. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Factibilidades de tipología de proyectos.
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Proyecciones (AP y PE).
              </ListGroup.Item>
              </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
