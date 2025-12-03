import ToastItem from "./ToastItem";

export default function ToastContainer({ errors, onClear }) {
  console.log("� Render ToastContainer");

  return (
    <div>
      {errors.map(error => (
        <ToastItem
          key={error.id}
          error={error}
          onClose={onClear} // ahora pasamos la misma función memoizada
        />
      ))}
    </div>
  );
}
