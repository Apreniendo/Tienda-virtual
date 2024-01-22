import { PRODUCTOS } from "../../scripts/productos";
import Producto from "../components/Producto";
import '../css/tienda.css'

export default function Tienda() {
  return (
    <>
      <h2>Productos</h2>
      <div id="products-container" class="items-container">
      {PRODUCTOS.map(p => <Producto product={p} />)}
      </div>
    </>
  );
}
