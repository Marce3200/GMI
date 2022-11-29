import React from "react";
import Card from "react-bootstrap/Card";

const Servicios = () => {
  return (
    <div className="header container-fluid text-center">
      <p className="titulo-home">Servicios</p>

      <div className="cards-favoritos container">
        <Card className="card-favorito" style={{ width: "18rem" }}>
          {/* <Card.Img className="foto-menu" variant="top" src={SUSHI1} /> */}
          <Card.Body>
            <Card.Title className="titulo-card">
              CORRETAJE DE PROPIEDADES
            </Card.Title>
            <Card.Text className="text-card">
              Sushi preparado con salmón del mar negro y exclusivas paltas de
              Petorca. Dada la escasez de los ingredientes, este es el único
              restaurant en latinoamrecia que ofrece esta preparación. Es una
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          {/* <Card.Img className="foto-menu" variant="top" src={sushi2} /> */}
          <Card.Body>
            <Card.Title className="titulo-card">
              ADMINISTRACION DE PROPIEDADES
            </Card.Title>
            <Card.Text className="text-card">
              Creaciones del chef seleccionadas, menú de 12 piezas. Cada día el
              Chef presenta 12 combinaciones distintas, que nunca se volverán a
              repetir.
              <br />
              $540.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          {/* <Card.Img className="foto-menu" variant="top" src={sushi6} /> */}
          <Card.Body>
            <Card.Title className="titulo-card">
              SERVICIOS LEGALES INMMOBILIARIOS
            </Card.Title>
            <Card.Text className="text-card">
              Exquisito arroz cubierto por un sombrero de pan de almendras,
              aplastado cuidadosamente por los deditos del Chef durante su hora
              de meditación. Las dos piezas se sirven directo sobre la mesa para
              incentivar la experiencia sensorial del cliente
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          {/* <Card.Img className="foto-menu" variant="top" src={sushi7} /> */}
          <Card.Body>
            <Card.Title className="titulo-card">
              ESTUDIOS Y TASACIONES
            </Card.Title>
            <Card.Text className="text-card">
              Carne macerada de ciervo en especias del oriente, envueltas en
              masa de ojaldre dulce. Es uno de los favoritos del Chef.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Servicios;
