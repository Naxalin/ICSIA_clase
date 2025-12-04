import { useAuth } from "../context/AuthContext";

export default function UserSelector() {
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <div className="d-flex align-items-center gap-3">
      <label className="text-white fs-5">Usuario Actual:</label>

      <select
        className="form-select w-auto"
        value={currentUser}
        onChange={(e) => setCurrentUser(e.target.value)}
      >
        <option>Ana</option>
        <option>Luis</option>
        <option>Invitado</option>
      </select>
    </div>
  );
}
