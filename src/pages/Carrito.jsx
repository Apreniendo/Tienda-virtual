import React, { useState } from "react";
import ItemCarrito from "../components/ItemCarrito";
import { PRODUCTOS } from "../../scripts/productos";
import '../css/carrito.css'

export default function Carrito() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  function getProductById(id) {
    const product = PRODUCTOS.find((p) => p.id === +id);

    return product;
  }

  function increaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[id]++;
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  }

  function decreaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[id] > 1) {
      cart[id]--;
    } else {
      delete cart[id];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  }

  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  }

  const cartItemsContainer = Object.entries(cartItems).reduce(
    (acc, carrito) => {
      const [id, quantity] =  carrito
      const item = getProductById(id);
      console.log({item})

      acc[0].push(<ItemCarrito item={item} quantity={quantity} />);
      acc[1] += acc[1];

      return acc;
    },
    [[], 0]
  );

  function checkout() {
    // Aquí puedes agregar la lógica para procesar el pago y vaciar el carrito
    // Por ejemplo, puedes redirigir al usuario a una página de pago o enviar los datos del carrito a un servidor
    // En este ejemplo, se muestra un mensaje de confirmación y se vacía el carrito
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
