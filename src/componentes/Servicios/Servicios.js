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
                  Sushi preparado con salmón del mar negro y exclusivas paltas
                  de Petorca. Dada la escasez de los ingredientes, este es el
                  único restaurant en latinoamrecia que ofrece esta preparación.
                  Es una
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
                  Creaciones del chef seleccionadas, menú de 12 piezas. Cada día
                  el Chef presenta 12 combinaciones distintas, que nunca se
                  volverán a repetir.
                  <br />
                  $540.000
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
                Exquisito arroz cubierto por un sombrero de pan de almendras,
                aplastado cuidadosamente por los deditos del Chef durante su
                hora de meditación. Las dos piezas se sirven directo sobre la
                mesa para incentivar la experiencia sensorial del cliente
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
                  Carne macerada de ciervo en especias del oriente, envueltas en
                  masa de ojaldre dulce. Es uno de los favoritos del Chef.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
    </Container>
  );
};

export default Servicios;
