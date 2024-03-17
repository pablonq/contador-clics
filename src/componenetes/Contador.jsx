import '../estilos/contador.css';
function Contador(props){
  return (
    <div className="contador">
      {props.numClics}
    </div>
  )
}
export default Contador;