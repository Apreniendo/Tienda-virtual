export default function Producto({ product }) {
  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="price">Precio: {product.price} $</p>
        <p className="description">{product.description}</p>
        <button
          onClick={() => {
            // TODO: agregar funcionalidad aca
            // addToCart(product.id);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
