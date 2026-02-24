import { useState } from "react";
import AdminPage from "./AdminPage";

export default function AdminRoute() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Wrong password!");
    }
  };

  if (authorized) return <AdminPage />;

  return (
    <div className="max-w-md mx-auto p-6 mt-20">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}