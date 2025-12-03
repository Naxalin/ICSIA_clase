import { memo } from "react";
import IconoOnline from "./IconoOnline";

const Avatar = memo(({ avatar, isOnline }) => {
  console.log("� Render Avatar");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={avatar} width={50} alt="avatar" />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
});

export default Avatar;
