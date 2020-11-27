import React, { Fragment } from "react";
import "./styles/Pagina.css";

function Pagina({tipo,NombreDesafio,FechaInicio,FechaFin,Objetivo,Instrucciones,Premios,img1,img2,img3,Link}) {
  const path =
    "";
    //http://www.formosasoftwarefactory.com/panel/principal/imagenpanel
  return (
    <Fragment>
      <div className="container">
        <div className="pagina">
          <div className="header"></div>
          <div className="pagina_section-name">
            <h1>{tipo}</h1>
            <img
              className="imagenevento"
              src={`${path}/${img1}`}
              alt="imagen del evento"
              height="180px"
            />
          </div>
          <div className="pagina__section-info">
            <h3>{NombreDesafio}</h3>
            <h5>
              {" "}
              Desde el {FechaInicio} al {FechaFin}{" "}
            </h5>
          </div>
          <div className='descripciones'>
            <p className="p-large">{Objetivo}</p>
            <p className="p-large">{Instrucciones}</p>
            <p className="p-large">{Premios}</p>
          </div>
          <div className='paraimagen'>          
          <img
            className="imagenpremio"
            src={`${path}/${img2}`}
            alt="Imagen Premio"
            height="170px"
          />
          <img
            className="imagenpremio"
            src={`${path}/${img3}`}
            alt="Imagen Premio"
            height="170px"
          />
          </div>
          <div className="parabutton">
            <a
              href={Link}
              className="btn btn-primary"
              role="button"
              aria-pressed="true"
            >
              JUGAR
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Pagina;
