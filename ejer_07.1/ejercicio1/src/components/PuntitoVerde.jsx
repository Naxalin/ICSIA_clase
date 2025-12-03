import { memo } from "react";

const PuntitoVerde = memo(({ isOnline }) => {
  console.log("Render PuntitoVerde");

  return (
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        marginLeft: 10,
        backgroundColor: isOnline ? "green" : "red",
      }}
    />
  );
});

export default PuntitoVerde;
