import React from "react";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import Servicios from "./Servicios/Servicios";
import Contacto from "./Contacto/Contacto";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Servicios/>
      <QuienesSomos/>
      <Contacto/>
    </div>
  );
};

export default Home;
