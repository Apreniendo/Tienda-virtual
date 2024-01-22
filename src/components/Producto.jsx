export default function Producto({ product }) {
  function addToCart(id) {
    let cart = {};
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if (cart[id]) {
      cart[id]++;
    } else {
      cart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="price">Precio: {product.price} $</p>
        <p className="description">{product.description}</p>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
