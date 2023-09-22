import React from 'react';
import '../hojasestilos/contador.css';

function Contador ({numdeClics}) {
    return(
        <div className='contador'>
            {numdeClics}
        </div>
    )
}

export default Contador;