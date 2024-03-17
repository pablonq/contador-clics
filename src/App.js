
import './App.css';
import Logo from '../src/imagenes/logo.png';
import Boton from './componenetes/boton';
import Contador from './componenetes/Contador';
import { useState } from 'react'; /**importa Hooks en particualar useState */
function App() {

  const[numClics, setNumClics] = useState(0);/** numClics es el estado y setNumClics es la asignacion de numero de estados */

const manejarClic = () => {
  setNumClics(numClics + 1);
};
const reiniciar = () =>{
  setNumClics(0);
}; /**las funciones flecha deben terminar en ; */

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className = 'logo' 
        src = {Logo}
        alt = 'Logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics = {numClics}
        />
        <Boton 
        texto = 'Clic'
        esBotondeClic = {true}
        manejarClic = {manejarClic}/>
        <Boton 
        texto = 'Reiniciar'
        esBotondeClic = {false}
        manejarClic = {reiniciar}
        />
        
      </div>
      
    </div>
  );
}

export default App;
