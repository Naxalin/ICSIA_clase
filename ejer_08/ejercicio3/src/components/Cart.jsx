import CartItem from "./CartItem";

export default function Cart({ cart, onIncrement, onDecrement, onRemove, total }) {
  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      ))}

      <h3 style={{ marginTop: "1rem" }}>
        Total: {total.toFixed(2)} €
      </h3>
    </div>
  );
}
