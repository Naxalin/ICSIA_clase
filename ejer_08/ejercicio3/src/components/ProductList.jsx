import ProductItem from "./ProductItem";

export default function ProductList({ products, onAdd }) {
  return (
    <div>
      <h2>Productos</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
