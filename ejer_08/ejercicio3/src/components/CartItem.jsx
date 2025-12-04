export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: "0.5rem",
        marginBottom: "1rem"
      }}
    >
      <h4>{item.name}</h4>
      <p>Precio: {item.price.toFixed(2)} €</p>
      <p>Cantidad: {item.quantity}</p>

      <button onClick={() => onDecrement(item.id)}>-</button>
      <button onClick={() => onIncrement(item.id)}>+</button>
      <button onClick={() => onRemove(item.id)} style={{ marginLeft: "1rem" }}>
        Eliminar
      </button>
    </div>
  );
}
