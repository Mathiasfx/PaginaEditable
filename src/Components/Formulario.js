import React,{ useState } from 'react'

function Formulario() {
    //Iniciar internamente los valores
    const [info,setinfo] = useState({
        tipo:'',
        NombreDesafio:'',
        FechaInicio:'',
        FechaFin:'',
        Objetivo:'',
        Instrucciones:'',
        Premios:''
    });
 
    //Cuando Cambia el Input hago una copia de Info
    const handleChange = e =>{
       setinfo({
          ...info,
          [e.target.name]: e.target.value,
        });
    };
    const handleClick = e =>{
        e.preventDefault();
        console.log('hace click');
    }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(info);
    }
    return (
        <div className='forcontenedor'>
            <h1>Edicion</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Mensaje Bienvenida</label>
                    <input onChange={handleChange} className='form-control' type='text' name='tipo' value={info.tipo}></input>
                </div>
                <div className="form-group">
                    <label>Nombre Desafio</label>
                    <input onChange={handleChange} className='form-control' type='text' name='NombreDesafio' value={info.NombreDesafio} ></input>
                </div>
                <div className="form-group">
                    <label>Fecha de Inicio</label>
                    <input onChange={handleChange} className='form-control' type='text' name='FechaInicio' value={info.FechaInicio} ></input>
                    <label>Fecha de Fin</label>
                    <input onChange={handleChange} className='form-control' type='text' name='FechaFin' value={info.FechaFin} ></input>
                </div>
                <div className="form-group">
                    <label>Objetivo del Juego</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Objetivo' value={info.Objetivo}></textarea>
                </div>
                <div className="form-group">
                    <label>Instrucciones</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Instrucciones' value={info.Instrucciones} ></textarea>
                </div>
                <div className="form-group">
                    <label>Premios</label>
                    <textarea type='text' onChange={handleChange} className='form-control' name='Premios' value={info.Premios} ></textarea>
                </div>

                <button onClick={handleSubmit} type='submit' className='btn btn-info'>Aceptar</button>

            </form>
            
        </div>
    )
}

export default Formulario
