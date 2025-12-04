import { useAuth } from "../context/AuthContext";

export default function UserInfo() {
  const { currentUser } = useAuth();

  return (
    <span className="text-white fw-bold">Logueado como: {currentUser}</span>
  );
}
