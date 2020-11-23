import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inicio.css";

function Inicio({ name = "leer" }) {
  const path = 'http://www.formosasoftwarefactory.com/panel/principal/imagenpanel';
  //Array de datos para Iterar
  const [datos, setDatos] = useState([]);
  const [datoss,setDatoss] = useState([]);
  //Guardo en valores separados para su facil manejo
  const [tipo, setTipo] = useState("Trivia");
  const [NombreDesafio, setNombreDesafio] = useState("");
  const [FechaInicio, setFechaInicio] = useState("");
  const [FechaFin, setFechaFin] = useState("");
  const [Objetivo, setObjetivo] = useState("");
  const [Instrucciones, setInstrucciones] = useState("");
  const [Premios, setPremios] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [Link, setLink] = useState("");

  //Evito el Loop infinito y solo llamo cuando carga la aplicacion
  useEffect(() => {    //Url Api me devuelve un JSON

    const url =
      "http://formosasoftwarefactory.com/desafioapi/procesar.php?=${name}";
    //Fetch para leer el JSON de respuesta

    const fetchDatos = async () =>{
      const response= await fetch(url);
      const datoss = await response.json();
      setDatoss(datoss);  
      datoss.forEach((Element) => {
        const {
          Tipo,
          Nombre,
          FechaInicio,
          FechaFin,
          Objetivo,
          Instrucciones,
          Premios,
          img1,
          img2,
          img3,
          Link,
        } = Element;
        setTipo(Tipo);
        setNombreDesafio(Nombre);
        setFechaInicio(FechaInicio);
        setFechaFin(FechaFin);
        setObjetivo(Objetivo);
        setInstrucciones(Instrucciones);
        setPremios(Premios);
        setimg1(img1);
        setimg2(img2);
        setimg3(img3);
        setLink(Link);
      });  
    }
    fetchDatos();
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((datos) => {
    //     //llamo al metodo que modifica los datos
    //     setDatos(datos);
    //     //Itero Sobre datos y guardo los valores
    //     datos.forEach((Element) => {
    //       const {
    //         Tipo,
    //         Nombre,
    //         FechaInicio,
    //         FechaFin,
    //         Objetivo,
    //         Instrucciones,
    //         Premios,
    //         img1,
    //         img2,
    //         img3,
    //         Link,
    //       } = Element;
    //       setTipo(Tipo);
    //       setNombreDesafio(Nombre);
    //       setFechaInicio(FechaInicio);
    //       setFechaFin(FechaFin);
    //       setObjetivo(Objetivo);
    //       setInstrucciones(Instrucciones);
    //       setPremios(Premios);
    //       setimg1(img1);
    //       setimg2(img2);
    //       setimg3(img3);
    //       setLink(Link);
    //     });
    //  });
  }, [name]);
  return (
    <Fragment>
      <div className="header-content">
        <div className="container">
          <div className="text-container">
            <div>
              <h1>Hola Bienvenido {tipo}</h1>
            </div>
            <div className="logo">
              <img src={`${path}/${img1}`} alt="Imagen Logo" height='70px' ></img>
            </div>
          </div>
          <div className="contenido">
            <h4>{NombreDesafio}</h4>
            <h5>
              Desde el {FechaInicio} al {FechaFin}
            </h5>
            <p className="p-large">{Objetivo}</p>
            <p className="p-large">{Instrucciones}</p>
            <p className="p-large">{Premios}</p>
            <img className='imagenpremio' src={`${path}/${img2}`} alt="Imagen Premio" height='170px'></img>
            <img className='imagenpremio' src={`${path}/${img3}`} alt="Imagen Premio" height='170px'></img>
            <div className='botonespacio'>
            <a
              href={Link}
              className="btn btn-success btn-lg active"
              role="button"
              aria-pressed="true"
            >
              JUGAR
            </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Inicio;
