import React, { useState } from "react";
import axios from "axios";



function Formulario({ onChange, form }) {
  //Enviar
  const handleSubmit = (e) => {
    e.preventDefault();
     axios
      .post(
        "http://www.fsf.com.ar/principal/formulario.php",form)
        .then((response) => {
        console.log(response, form);
      })
      .catch((error) => {
        console.log(console.log(error));
      });
  };

  const [imagen1,setImagen1] = useState('');

  function HandleFile(e){
    setImagen1(e.target.files[0]);  
    fileUploader();
  }

  const fileUploader = () =>{
    // axios.post()
    console.log(imagen1.name);
  }




  return (
    <div className="forcontenedor">
      <h1>Edicion</h1>
      <form onSubmit={handleSubmit}>
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
                onChange={HandleFile}
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
                onChange={onChange}
                className="form-control-file"
                name="img2"
                value={form.img2}
              ></input>
            </div>
            <div className="col-xs-12 col-md-6">
              <label>Imagen Premio 2</label>
              <input
                type="file"
                onChange={onChange}
                className="form-control-file"
                name="img3"
                value={form.img3}
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
