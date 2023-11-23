import { useState } from 'react';
import useLstProducto from '../lst/useLstProducto';

function useCards() {
  const [cantidad, setCantidad] = useState(0);

  const { actualizarPrecioSuma, actualizarPrecioResta } = useLstProducto();

  const sumarCantidad = (precio: number) => {
    setCantidad(cantidad + 1);
    actualizarPrecioSuma(precio);
  };

  const restarCantidad = (precio: number) => {
    setCantidad(cantidad - 1);
    actualizarPrecioResta(precio);
  };

  return {
    cantidad,
    sumarCantidad,
    restarCantidad,
  };
}

export default useCards;
