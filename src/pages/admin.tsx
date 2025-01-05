// pages/admin.tsx
import { useState } from "react";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple admin credentials (replace with your logic)
    const adminUsername = "admin";
    const adminPassword = "22007";

    if (username === adminUsername && password === adminPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
        <p className="text-gray-700 mt-2">You have successfully logged in.</p>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-96 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="/image.png" // Replace with the actual logo path
            alt="Logo"
            className="w-20 h-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
