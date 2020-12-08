import React, {useState,useEffect, Fragment } from "react";
import "./PaginaNew.css";
import Navbar from "../Components/Navbar";
import Pagina from "../Components/Pagina";
import Formulario from "../Components/Formulario"


function PaginaNew({id}) {

      //Iniciar internamente los valores

 const [imagen1,setImagen1] = useState('logoEmpty.png');
 const [imagen2,setImagen2] = useState('PremioEmpty.png');
 const [imagen3,setImagen3] = useState('PremioEmpty.png');
 const temporal = 'logoEmpty.png';
 const [colorpag,setColorpag] = useState('#0693E3');
 const [cambia,setCambia] = useState('');

const [form,setform] = useState({
  fondo:'',
  tipo:'',
  NombreDesafio:'',
  FechaInicio:'',
  FechaFin:'',
  Objetivo:'',
  Instrucciones:'',
  Premios:'',
  Link:'',  
});

    const handleChange = e =>{
        setform({
          ...form,         
          [e.target.name]: e.target.value,          
         });
     };

     const handleImagen1 = e =>{
      setImagen1(e.target.files[0]);
     }
     const handleImagen2 = e =>{
      setImagen2(e.target.files[0]);
     }
     const handleImagen3 = e =>{
      setImagen3(e.target.files[0]);     
     }
   
     const cambiarcolor = (color) =>{
      form.fondo = color; 
      setCambia(color);   

    }

    const styleform = {
      background:'#fff'
    };

    useEffect(() => {       
      setColorpag(form.fondo);   
    },[cambia]);


  return (
    <Fragment>
    
      <Navbar />
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-xs-12 col-md-8" style={{colorpag}}>
            <Pagina
             fondo={form.fondo} 
             tipo={form.tipo}
             NombreDesafio={form.NombreDesafio}
             FechaInicio={form.FechaInicio}            
             FechaFin={form.FechaFin}
             Objetivo={form.Objetivo}
             Instrucciones={form.Instrucciones}
             Premios={form.Premios}
             Link={form.Link}
             img1={temporal}
             img2={temporal}
             img3={temporal}
            />              
          </div>
          <div className="col-xs-12 col-md-4" style={styleform}>
              <Formulario 
              onChange={handleChange}
              onImage1={handleImagen1}
              onImage2={handleImagen2}
              onImage3={handleImagen3}
              onColor={cambiarcolor}
              form={form}
              imagen1={imagen1}
              imagen2={imagen2}
              imagen3={imagen3}
              id={id}              
              />
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default PaginaNew;
