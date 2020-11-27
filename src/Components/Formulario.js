import React,{useState} from 'react'

function Formulario() {    

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
 
    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='forcontenedor'>
            <h1>Edicion</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Mensaje Bienvenida</label>
                    <input onChange={handleChange} className='form-control' type='text' name='tipo' value={form.tipo}></input>
                </div>
                <div className="form-group">
                    <label>Nombre Desafio</label>
                    <input onChange={handleChange} className='form-control' type='text' name='NombreDesafio' value={form.NombreDesafio} ></input>
                </div>
                <div className="form-group">
                    <label>Fecha de Inicio</label>
                    <input onChange={handleChange} className='form-control' type='text' name='FechaInicio' value={form.FechaInicio} ></input>
                    <label>Fecha de Fin</label>
                    <input onChange={handleChange} className='form-control' type='text' name='FechaFin' value={form.FechaFin} ></input>
                </div>
                <div className="form-group">
                    <label>Objetivo del Juego</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Objetivo' value={form.Objetivo}></textarea>
                </div>
                <div className="form-group">
                    <label>Instrucciones</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Instrucciones' value={form.Instrucciones} ></textarea>
                </div>
                <div className="form-group">
                    <label>Premios</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Premios' value={form.Premios} ></textarea>
                </div>
                <div className="form-group">
                    <label>Codigo del Link</label>
                    <input onChange={handleChange} className='form-control' type='text' name='Link' value={form.Link} ></input>
                </div>

                <button onClick={handleSubmit} type='submit' className='btn btn-info'>Aceptar</button>

            </form>
            
        </div>
    )
}

export default Formulario
