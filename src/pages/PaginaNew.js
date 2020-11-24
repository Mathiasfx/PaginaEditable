import React, { Fragment } from "react";
import "./PaginaNew.css";
import Navbar from "../Components/Navbar";
import Pagina from "../Components/Pagina";
import Formulario from "../Components/Formulario"

function PaginaNew() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Pagina
              tipo="Bienvenido a la Trivia"
              NombreDesafio="Desafio Tomi"
              FechaInicio="23 de Noviembre"
              FechaFin="30 de Diciembre"
              Objetivo="Responde todas las preguntas que puedas en el tiempo estimado"
              Instrucciones="Para participar debes registrarte con tu Mail"
              Premios="Una Play station 5"
              img1="Foto%20Escuela%201.jpg"
              img2="Foto%20Alumnos%201.jpg"
              img3="Foto%20Alumnos%20Zoom.jpg"
              Link="2689"
            />
          </div>
          <div className="col-4">
              <Formulario/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PaginaNew;
