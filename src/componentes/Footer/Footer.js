import React from 'react'
import logo from "../img/logo.png"


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row contenedor-footer">
          {/* Column1 */}
          <div className="col">
          <img className="logo" src={logo} alt="logo"/>
          </div>
          {/* Column2 */}
          <div className="col">
            <p className="titulo-footer">Ven a visitarnos</p>
            <ul className="list-unstyled">
              <li>+562 223 5644</li>
              <li>Providencia 2463</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <p className="titulo-footer" >Aquí estamos</p>
            <ul className="list-unstyled">
             
              <li><a href="/contacto" className="links-footer">Contacto</a></li>
              <li><a href="/servicios" className="links-footer">Servicios</a></li>
              <li><a href="/quienes-somos" className="links-footer">Nosotros</a></li>
            </ul>
          </div>
        </div>
        <hr className="hr"/>
        <div className="row">
          <p className="texto-derechos col-sm">
            &copy;2022 @coding4u.cl| Todos los derechos reservados |
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer