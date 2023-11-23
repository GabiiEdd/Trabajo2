import Cards from '../componentes/cards';
import './lst-producto.css';
import useLstProducto from './useLstProducto';

function LstProducto(props) {
  const { children, eliminarItem, totalPrecio } = props;
  console.log('total lista', totalPrecio);

  return (
    <div className="Lst">
      <div className="row">
        <h1>Listado de Productos &nbsp;&nbsp;${totalPrecio}</h1>
      </div>
      <div className="contenedor">
        <Cards children={children} eliminarItem={eliminarItem} />
      </div>
    </div>
  );
}

export default LstProducto;
