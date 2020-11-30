import React, { Fragment } from "react";
import "./styles/Pagina.css";
import emptyimg from '../Components/images/logoEmpty.png';
import emptypremio from '../Components/images/PremioEmpty.png';

function Pagina({tipo,NombreDesafio,FechaInicio,FechaFin,Objetivo,Instrucciones,Premios,img1,img2,img3,Link}) {
  const path ="/iframe";
    //definir una constante para trabajar con la cadena de texto https://play.tomi.digital/auth?code=
    const Premioss = Premios;    
    //Separar la cadena de Premios y dividirlos por ", " Comas
    const ArrayPremio = Premioss.split(",");    
    //Crea la Lista utilizando un Map
  const ImprimirPremio = (ArrayPremio) =>{
    let imprimir = [];     
    imprimir=ArrayPremio.map((premio,i) => (<li key={i}>{premio}</li>));
    return imprimir;
  }    

  

  return (
    <Fragment>
      <style>{'body { background-color: #242424; }'}</style>
      <div className="container">
        <div className="pagina">
          <div className="header"></div>
          <div className="pagina_section-name">
            <h1>{tipo || 'Bienvenido'}</h1>
            <img
              className="imagenevento"
              src={img1 || emptyimg}
              alt="imagen del evento"
              height="180px"
            />
          </div>
          <div className="pagina__section-info">
            <h3>{NombreDesafio || 'Al Desafio Trivia'}</h3>
            <h5>
              {" "}
              Desde el {FechaInicio || '20 de Diciembre'} al {FechaFin || '20 de Enero'}{" "}
            </h5>
          </div>
          <div className='descripciones'>
            <p className="p-large">{Objetivo || 'Descubre Cuanto sabes de Tecnologia'}</p>
            <p className="p-large">{Instrucciones || 'Ingresa Poniendo tu Nombre y los 4 Ultimos numeros de tu Celu'}</p>
          
              <ul className='lista'>
                {ImprimirPremio(ArrayPremio) || 'Premio1'}           
              </ul>
          </div>
          <div className='paraimagen'>          
          <img
            className="imagenpremio"
            src={img2 || emptypremio}
            alt="Imagen Premio"
            height="170px"
          />
          <img
            className="imagenpremio"
            src={img3 || emptypremio}
            alt="Imagen Premio"
            height="170px"
          />
          </div>
          <div className="parabutton">
            <a
              href={`${path}`}
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
