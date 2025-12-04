import { useEffect, useReducer, useCallback, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const productInCart = state.find(item => item.id === action.payload.id);

      if (productInCart) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INCREMENT": {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case "DECREMENT": {
      return state
        .map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    }

    case "REMOVE": {
      return state.filter(item => item.id !== action.payload);
    }

    default:
      return state;
  }
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetch("/src/data/productos.json")
      .then(res => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");
        return res.json();
      })
      .then(data =>
        setProducts(
          data.map(p => ({
            ...p,
            id: Number(p.id)
          }))
        )
      )
      .catch(error => console.error("Error cargando productos:", error));
  }, []);

  const handleAdd = useCallback(product => {
    dispatch({ type: "ADD", payload: product });
  }, []);

  const handleIncrement = useCallback(id => {
    dispatch({ type: "INCREMENT", payload: id });
  }, []);

  const handleDecrement = useCallback(id => {
    dispatch({ type: "DECREMENT", payload: id });
  }, []);

  const handleRemove = useCallback(id => {
    dispatch({ type: "REMOVE", payload: id });
  }, []);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <ProductList products={products} onAdd={handleAdd} />
      <Cart
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        total={total}
      />
    </div>
  );
}
