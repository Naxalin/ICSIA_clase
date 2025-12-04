export default function ProductItem({ product, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem"
      }}
    >
      <h3>{product.name}</h3>
      <p>Precio: {product.price.toFixed(2)} €</p>
      <button onClick={() => onAdd(product)}>Añadir al carrito</button>
    </div>
  );
}
