import '../estilos/boton.css';
import React from 'react';

class Boton extends React.Component {
  render() {
    return (
      <button 
      className = { this.props.esBotondeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick = { this.props.manejarClic } > {/* si "esBotondeClic" es true retorna "boton-clic" sino retorna "boton-reiniciar*/}
        {this.props.texto}
      </button>
    );

  }
}


export default Boton;