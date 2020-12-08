import React, { useState } from "react";
import {TwitterPicker} from 'react-color';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from "axios";
import { useHistory } from "react-router-dom";



function Formulario({ onChange,onImage1,onImage2,onImage3, form, imagen1,imagen2,imagen3,onColor,id }) {
  //Enviar
  const history = useHistory();
  const [show,setshow] = useState(false);
  const [color,setColor] = useState('#22194d');
  const miColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#FA0D00', '#F78DA7', '#9900EF','#EDCF8A','#B9ED5A','#87777E','#730202'];
  const handleSubmit = (e) => {
    e.preventDefault();
    
     axios
      .post(
        `http://www.fsf.com.ar/principal/formulario.php?id=${id}`,form)
        .then((response) => {
        console.log(response, form);       
     
      })
      .catch((error) => {
        console.log(error);
      });

      Uploader();
  };

  const Uploader = () => {    
    let formdata  = new FormData();
    formdata.append('img1',imagen1);
    formdata.append('img2',imagen2);
    formdata.append('img3',imagen3);
    const options = {
      onUploadProgress:(progressEvent) => {
        const {loaded,total} =progressEvent;
        let percent = Math.floor((loaded * 100)/ total);
        console.log(`${loaded}kb de ${total}kb | ${percent}%`); 
        
      }
    }
    axios({
      url:`http://www.fsf.com.ar/principal/formularioimagen.php?id=${id}`,
      method:'POST',    
      data: formdata,     
      config: { headers: {"Content-Type": "multipart/form-data" }}}, options)
      .then((response=>{        
        console.log(response);        
      },(error)=>{
        console.log(error);
      }))
     
      onConfirm();
      
      
  }

  


  //Luego de 2 segundos Redirecciona
  const onConfirm= () =>{    
    setshow(true);
    setTimeout(redir,2500);
  }
  //redireccion usando history
  const redir = () =>{
    
    switch(id){
      case '1':        
        history.push("/Evento");       
      break;
      case '2':
        history.push("/Colegio");
      break;
      case '3':
        history.push("/Empresa");
      break;
    }
   
  }
 
 





  return (
    <div className="forcontenedor">
      <SweetAlert
        success
        show={show}
        title="Cargando... Espere Redireccionamiento"
        onConfirm={() => setshow(false)}
      />

      <h1>Edicion</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='row'>
              <div className='col-xs-12'>
                <label className='p-3'>Color de Fondo</label>
                 <TwitterPicker
                 colors={miColors}
                 color={color}
                 onChangeComplete={(color) =>{setColor(color.hex)}}            

                 onChange={onColor(color)}/> 
              </div>
          </div>
        </div>
        <div className="form-group">     
         
          <div className="row">            
            <div className="col-xs-12 col-md-6">
              {" "}
              <label> Mensaje Bienvenida</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                name="tipo"
                value={form.tipo}
              ></input>
            </div>
            <div className="col-xs-12 col-md-6">
              <label>imagen logo</label>
       
              <input
                onChange={onImage1}
                className="form-control-file"
                type="file"                          
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Nombre Desafio</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="NombreDesafio"
            value={form.NombreDesafio}
          ></input>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <label>Fecha de Inicio</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                name="FechaInicio"
                value={form.FechaInicio}
              ></input>
            </div>
            <div className="col-xs-12 col-md-6">
              <label>Fecha de Fin</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                name="FechaFin"
                value={form.FechaFin}
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Objetivo del Juego</label>
          <textarea
            type="text"
            onChange={onChange}
            className="form-control"
            name="Objetivo"
            value={form.Objetivo}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Instrucciones</label>
          <textarea
            type="text"
            onChange={onChange}
            className="form-control"
            name="Instrucciones"
            value={form.Instrucciones}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Premios (Separar por Comas ,)</label>
          <textarea
            type="text"
            onChange={onChange}
            className="form-control"
            name="Premios"
            value={form.Premios}
          ></textarea>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <label>Imagen Premio 1</label>
              <input
                type="file"
                onChange={onImage2}
                className="form-control-file"
                name="img2"                
              ></input>
            </div>
            <div className="col-xs-12 col-md-6">
              <label>Imagen Premio 2</label>
              <input
                type="file"
                onChange={onImage3}
                className="form-control-file"
                name="img3"              
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Codigo del Link</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="Link"
            value={form.Link}
          ></input>
        </div>

        <button onClick={handleSubmit} type="submit" className="btn btn-info">
          GUARDAR
        </button>
      </form>
    </div>
  );
}

export default Formulario;
