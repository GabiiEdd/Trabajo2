import AbmProducto from './paginas/frm-abm/abm-producto.tsx';
import './assets/index.css';
import LstProducto from './paginas/lst/lst-producto.tsx';
import useLstProducto from './paginas/lst/useLstProducto.ts';
import useApp from './useApp.ts';

function App() {
  const { agregarItem, eliminarItem, items } = useApp();
  const { totalPrecio } = useLstProducto();

  return (
    <div className="AppContenedor">
      <div className="columna1">
        <AbmProducto onAdd={agregarItem} items={items} />
      </div>
      <div className="columna2">
        <LstProducto eliminarItem={eliminarItem} totalPrecio={totalPrecio}>
          {items}
        </LstProducto>
      </div>
    </div>
  );
}

export default App;
