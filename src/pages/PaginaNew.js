import React, {useState, Fragment } from "react";
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
             tipo=''
             NombreDesafio=''
             FechaInicio=''             
             FechaFin=''
             Objetivo=''
             Instrucciones=''
             Premios=''
             Link=''
             img1=''
             img2=''
             img3=''
            />              
          </div>
          <div className="col-4">
              <Formulario                  
              />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PaginaNew;
