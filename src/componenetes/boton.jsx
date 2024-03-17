import '../estilos/boton.css';
function Boton({texto, esBotondeClic, manejarClic}){
  return (
    <button 
    className = { esBotondeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick = { manejarClic } > {/* si "esBotondeClic" es true retorna "boton-clic" sino retorna "boton-reiniciar*/}
      {texto}
    </button>
  );
}
export default Boton;