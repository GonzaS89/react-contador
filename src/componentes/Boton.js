import React from 'react';
import '../hojasestilos/boton.css'

function Boton ({texto,esBotonDeClic, manejoClic}) {
    return(
        <button 
        className={ esBotonDeClic ? 'botonClic' : 'botonReinicio'}
        onClick = {manejoClic}>
        {texto}
        </button>
    )
}

export default Boton;