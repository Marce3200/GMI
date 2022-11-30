import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import '../QuienesSomos/quienessomos.css'

const QuienesSomos = () => {
  return (
    <Container fluid className="seccion-quienes">
      <Row>
        <center>
        <Col>
        
          <p className="titulo-seccion-quienes">
           Quiénes Somos
          </p>

          <p className="texto-descripcion">
            MGI Gestión Inmobiliaria nace a partir de la unión de competencias
            entre profesionales provenientes del área legal con profesionales
            provenientes de la administración de empresas.
            <br /><br />
            La experiencia acumulada nos llevó a dar un paso adelante de la
            asesoría técnica, para convertirnos en Gestores Inmobiliarios.
            Poniendo a disposición de nuestros clientes todas nuestras
            competencias. Nuestra experiencia nos permite comprender que el
            éxito de la Gestión Inmobiliaria se basa no sólo en una acabada
            asesoría técnica, sino también en entender las necesidades
            particulares de cada uno de nuestros clientes. 
            
            <br /><br />Por eso consideramos
            que la comunicación es un pilar fundamental en las relaciones que
            generamos.
          </p>
        
          
        </Col></center>
      </Row>
      

      <div className="row gx-xl-10 gy-6">
        <div className="col-md-6">
          <div className="d-flex flex-row">
            <div>
              <img
                src="./assets/img/icons/lineal/target.svg"
                className="svg-inject icon-svg icon-svg-sm me-4"
                alt=""
              />
            </div>
            <div>
              <h4 className="mb-1">Misión</h4>
              <p className="mb-0">
              Generar valor de forma eficaz y responsable para quienes nos
            confíen sus inmuebles.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex flex-row">
            <div>
              <img
                src="./assets/img/icons/lineal/award-2.svg"
                className="svg-inject icon-svg icon-svg-sm me-4"
                alt=""
              />
            </div>
            <div>
              <h4 className="mb-1">Visión</h4>
              <p className="mb-0">Entregar un servicio de alta calidad técnica, eficiente y
            transparente.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-row">
            <div>
              <img
                src="./assets/img/icons/lineal/award-2.svg"
                className="svg-inject icon-svg icon-svg-sm me-4"
                alt=""
              />
            </div>
            <div>
              <h4 className="mb-1">Valores</h4>
              <p className="mb-0">Compromiso, responsabilidad y gratitud a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuienesSomos;
