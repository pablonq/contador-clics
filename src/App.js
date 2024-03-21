
import './App.css';
import Logo from '../src/imagenes/logo.png';
import Boton from './componenetes/boton';
import Contador from './componenetes/Contador';

import React from 'react';

class App extends React.Component{
  constructor(){ /** se define si solo necesito asignarle un estado al componente ó si necesitamos pasar metodos a otros componentes. puede recir un props  */
    super(); /**extiende funcionalidad de react, va si o si cuando se usa constructor  */
    this.state ={  /**estado del componente App*/
             numClics : 0};
             this.manejarClic = this.manejarClic.bind(this);/**bind permite asociar "this" del contructor  a la función manejarClic (metodos). Si no se incluyen no funcionan los metodos */
             this.reiniciar = this.reiniciar.bind(this);/** */
}
manejarClic(){
  this.setState(({numClics}) =>({numClics: numClics + 1})); /**permite actualizar el objeto de estado, es el equivalente a setnumclics del hook, se usan llaves (({numClics: numClics + 1})) porq va a retornar un objeto.  */
}
reiniciar(){
  this.setState( {numClics:0});  
} 
  render(){
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
          className = 'logo' 
          src = {Logo}
          alt = 'Logo' />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics = {this.state.numClics}
          />
          <Boton 
          texto = 'Clic'
          esBotondeClic = {true}
          manejarClic = {this.manejarClic}/>
          <Boton 
          texto = 'Reiniciar'
          esBotondeClic = {false}
          manejarClic = {this.reiniciar}
          />
          
        </div>
        
      </div>
    );

  }
}


export default App;
