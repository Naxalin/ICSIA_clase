import { memo } from "react";
import PuntitoVerde from "./PuntitoVerde";

const IconoOnline = memo(({ isOnline }) => {
  console.log("Render IconoOnline");
  return <PuntitoVerde isOnline={isOnline} />;
});

export default IconoOnline;
