import React, {useState, Fragment } from "react";
import "./PaginaNew.css";
import Navbar from "../Components/Navbar";
import Pagina from "../Components/Pagina";
import Formulario from "../Components/Formulario"


function PaginaNew() {

      //Iniciar internamente los valores
const [form,setform] = useState({
  tipo:'',
  NombreDesafio:'',
  FechaInicio:'',
  FechaFin:'',
  Objetivo:'',
  Instrucciones:'',
  Premios:'',
  Link:'',
  img1:'',
  img2:'',
  img3:'',
});

    const handleChange = e =>{
        setform({
          ...form,
          [e.target.name]: e.target.value,
         });
     };

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <Pagina
             tipo={form.tipo}
             NombreDesafio={form.NombreDesafio}
             FechaInicio={form.FechaInicio}            
             FechaFin={form.FechaFin}
             Objetivo={form.Objetivo}
             Instrucciones={form.Instrucciones}
             Premios={form.Premios}
             Link={form.Link}
             img1={form.img1}
             img2={form.img2}
             img3={form.img3}
            />              
          </div>
          <div className="col-xs-12 col-md-4">
              <Formulario 
              onChange={handleChange}
              form={form} />
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default PaginaNew;
