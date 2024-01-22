import React, { useState } from "react";
import ItemCarrito from "../components/ItemCarrito";
import { PRODUCTOS } from "../../scripts/productos";
import "../css/carrito.css";

export default function Carrito() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  function getProductById(id) {
    const product = PRODUCTOS.find((p) => p.id === +id);

    return product;
  }

  function handleUpdate(cart) {
    setCartItems(cart);
  }

  const cartItemsContainer = Object.entries(cartItems).reduce(
    (acc, carrito) => {
      const [id, quantity] = carrito;
      const item = getProductById(id);
      console.log({ item });

      acc[0].push(
        <ItemCarrito item={item} quantity={quantity} onUpdate={handleUpdate} />
      );

      acc[1] += quantity * item.price;

      return acc;
    },
    [[], 0]
  );

  console.log({ cartItemsContainer });

  function checkout() {
    alert("Gracias por su compra!");
    localStorage.removeItem("cart");
    setCartItems([]);
  }

  return (
    <>
      <h2>Carrito de compra</h2>
      {cartItems.length !== 0 ? (
        <>
          <div id="cart-items">{cartItemsContainer[0]}</div>
          <div id="cart-total" className="cart-total">
            <h3>Total del carrito: ${cartItemsContainer[1].toFixed(2)}</h3>
            <button onClick={checkout}>Pagar</button>
          </div>
        </>
      ) : (
        <>
          <div id="cart-items">
            No se encuentran items en el carrito de compra por favor diríjase a
            la tienda virtual para comprar items
          </div>
        </>
      )}
    </>
  );
}
