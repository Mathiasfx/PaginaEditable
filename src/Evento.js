import React,{useState,useEffect,Fragment} from 'react'
import Pagina from './Components/Pagina';
import './Components/styles/Pagina.css';

function Evento(id) {   
    //Array de datas para Iterar 
    const [datas,setdatas] = useState({
      loading:true,
      error:null,
      datas:{
        results:[],
      },
    });
    //Guardo en valores separados para su facil manejo
    const [fondo,setfondo] = useState("");
    const [tipo, setTipo] = useState("");
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
        `http://fsf.com.ar/principal/procesar.php?action=leer&id=${id.id}`;
      //Fetch para leer el JSON de respuesta      
      
      
      const fetchdatas = async () =>{
        setdatas({loading:true, error:null});
        try{   
            const response= await fetch(url);
            const datas = await response.json();
            setdatas({loading:false,data:datas,});            
            datas.forEach((Element) => {
              const {
                fondo,
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
              setfondo(fondo);
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
            setdatas({loading:false,error:error,});  
          }
      }
      //Inicio el Metodo Fetch Para obtener los datas dentro del useEffect
      fetchdatas();
     
    
    }, [id]);
    if(datas.error){
      return `Error: ${datas.error.message}`;
    }
        return (
            <Fragment>
                {datas.loading &&(<div className='loader'><h3>CARGANDO...</h3></div>)} 
                <Pagina
                    fondo={fondo}
                    tipo={tipo}
                    NombreDesafio={NombreDesafio}
                    FechaInicio={FechaInicio}
                    FechaFin={FechaFin}
                    Objetivo={Objetivo}
                    Instrucciones={Instrucciones}
                    Premios={Premios}
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    Link={Link}
                />
                
            </Fragment>
        )

    }


export default Evento
