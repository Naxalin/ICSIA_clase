import { memo, useCallback } from "react";

const ToastItem = ({ error, onClose }) => {
  console.log("� Render ToastItem", error.id);

  const handleClose = useCallback(() => {
    onClose(error.id);
  }, [onClose, error.id]);

  return (
    <div style={{ border: "1px solid red", margin: 5, padding: 5 }}>
      <p>{error.message}</p>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
};

export default memo(ToastItem);
