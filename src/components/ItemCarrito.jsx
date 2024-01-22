export default function ItemCarrito({ item, quantity }) {
  return (
    <div className="cart-item" key={item.id}>
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <div className="quantity">
          <button onClick={() => decreaseQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseQuantity(id)}>+</button>
        </div>
        <p>
          Precio unitario: ${item.price.toFixed(2)} - Total $
          {(item.price * quantity).toFixed(2)}
        </p>
        <button className="btn-remover" onClick={() => removeFromCart(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}
