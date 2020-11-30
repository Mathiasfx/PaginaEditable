import React, { Fragment, useState, useEffect } from "react";
import "./Inicio.css";

function Inicio({ name = "leer" }) {
  //const path = 'http://www.formosasoftwarefactory.com/panel/principal/imagenpanel';
  //Array de datos para Iterar
  //const [datos, setDatos] = useState([]);
  const [datoss,setDatoss] = useState({
    loading:true,
    error:null,
    datoss:{
      results:[],
    },
  });
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

    const url ="http://formosasoftwarefactory.com/desafioapi/procesar.php?action=leer";
    //Fetch para leer el JSON de respuesta
    
    const fetchDatos = async () =>{
      setDatoss({loading:true, error:null});
      try{   
          const response= await fetch(url);
          const datoss = await response.json();
          setDatoss({loading:false,datoss:datoss,});  
        
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
        }catch(error){
          setDatoss({loading:false,error:error,});  
        }
    }
    
    fetchDatos();
  
  }, [name]);
  if(datoss.error){
    return `Error: ${datoss.error.message}`;
  }
  return (
    <Fragment>
      {datoss.loading &&(<div className='loader'><h3>CARGANDO...</h3></div>)}
      
      <div className="header-content">
        <div className="container">
          <div className="text-container">
            <div>
              <h1>{tipo}</h1>
            </div>
            <div className="logo">
            {/* `${path}/${img1}` */}
              <img src={img1} alt="Imagen Logo" height='70px' ></img>
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
            <img className='imagenpremio' src={img2} alt="Imagen Premio" height='170px'></img>
            <img className='imagenpremio' src={img3} alt="Imagen Premio" height='170px'></img>
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
