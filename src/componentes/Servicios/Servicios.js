import React from "react";
import Card from "react-bootstrap/Card";
import "../Servicios/servicios.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Servicios = () => {
  return (
    <Container fluid className="seccion-servicio text-center">
      <Row>
        <p className="titulo-seccion">Nuestros Servicios</p>
        
          <Col sm={12} md={6}>
            <Card className="card-servicio">
              {/* <Card.Img className="foto-menu" variant="top" src={SUSHI1} /> */}
              <Card.Body>
                <Card.Title className="titulo-card">
                  Corretaje de Propiedades
                </Card.Title>
                <Card.Text className="text-card">
                  
Compra/venta y arriendo de distintos bienes Inmuebles (casas, deptos, comercios, oficinas, terrenos etc.)
Publicación de las propiedades en los más importantes portales de venta y arriendo del país (portal inmobiliario, yapo, redes sociales, etc).
Asesoría calificada de inversión y rentabilidad de los distintos Bienes Inmuebles. Atención personalizada.
Evaluación financiera y legal de arrendatarios.
Protocolos estrictos de evaluación de arrendatarios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="card-servicio">
              {/* <Card.Img className="foto-menu" variant="top" src={sushi2} /> */}
              <Card.Body>
                <Card.Title className="titulo-card">
                  Administración de Propiedades
                </Card.Title>
                <Card.Text className="text-card">
                  
Múltiples contratos de administración.
Administración de viviendas, departamentos, comercios y oficinas.
Cobro mensual de arriendo y supervisión de gastos y mantenciones de las propiedades.
Protocolos estrictos de evaluación de arrendatarios. Altos estándares de calidad.
Resguardo de rentabilidad y patrimonio de nuestros clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
          <Card className="card-servicio">
            {/* <Card.Img className="foto-menu" variant="top" src={sushi6} /> */}
            <Card.Body>
              <Card.Title className="titulo-card">
                Servicios Legales Inmobiliarios
              </Card.Title>
              <Card.Text className="text-card">
              Estudio de títulos y Redacción de escrituras (compraventa, sesión de derechos, etc.)
Posesiones Efectivas y Herencias (Servicios de Trámites en Registro Civil y CBR)
Asesoría Legal Inmobiliaria

              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="card-servicio">
              {/* <Card.Img className="foto-menu" variant="top" src={sushi7} /> */}
              <Card.Body>
                <Card.Title className="titulo-card">
                  Estudios y Tasaciones
                </Card.Title>
                <Card.Text className="text-card">
                  
Tasación: es un instrumento comercial orientado a generar una estrategia de venta o arriendo, tiene por objetivo emitir una opinión respaldada por el valor del inmueble.
Análisis de rentabilidad de Bienes Inmuebles: estudio que tiene el fin de toma de decisiones de ventas, arriendos, incrementos anuales y establecer estrategias de toma de decisiones o movimientos de inversiones inmobiliarias.
Estudios de Cabida: Análisis de Aspectos normativos. Estudios de mercado de ventas y arriendos, oferta y/o demanda. Factibilidades de tipología de proyectos. Proyecciones (AP y PE).

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
    </Container>
  );
};

export default Servicios;
