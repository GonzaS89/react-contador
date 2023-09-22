import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const sumarClics = ()=> {
    setNumClics (numClics + 1)
  }

  const reinicioClics = ()=> {
    setNumClics(0)
  }

  return (
    <div className='contenedor-principal'>
      <Contador 
      numdeClics={numClics}/>
      <Boton 
      texto='Clic'
      esBotonDeClic={true}
      manejoClic={sumarClics}/>
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejoClic={reinicioClics}/>
    </div>
    
  );
}

export default App;
