import React, {Fragment} from 'react'
import Pagina from './Components/Pagina';
import './Components/styles/Pagina.css';

function Evento() {
    return (
        <Fragment>
            <Pagina
                tipo='Bienvenido a la Trivia'
                NombreDesafio='Desafio Tomi'
                FechaInicio='23 de Noviembre'
                FechaFin='30 de Diciembre'
                Objetivo='Responde todas las preguntas que puedas en el tiempo estimado'
                Instrucciones='Para participar debes registrarte con tu Mail'
                Premios='Una Play station 5'
                img1='Foto%20Escuela%201.jpg'
                img2='Foto%20Alumnos%201.jpg'
                img3='Foto%20Alumnos%20Zoom.jpg'
                Link='2689'
            />
            
        </Fragment>
    )
}

export default Evento
