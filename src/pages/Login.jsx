import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Login failed");
    }

    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role); // Save the role (e.g., "ADMIN" or "USER")

    // Redirect based on role

      navigate("/sidebar/practice"); // Redirect to admin sidebar
  } catch (err) {
    setError("Login failed: Invalid credentials or server error");
    console.error("Login error:", err.message);
  }
};

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleLogin}

        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Welcome Back
        </h2>
        <div className="mb-4">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <p className="text-gray-600 mb-2">Please log in to continue</p>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-600">Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"

            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition-all duration-300"
        >
          Log In
        </button>
         <p className="mt-4 text-center text-sm text-gray-600">
           Create New Account?{" "}
           <Link to="/Register" className="text-blue-500 hover:underline">Register</Link>
         
        </p>
      </form>
    </div>
  );
}
export default Login;


//   return (
//     <div className="login-container" style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "1rem" }}>
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "0.5rem" }}>
//           Login
//         </button>
//       </form>
//       <p style={{ marginTop: "1rem" }}>
//         Don't have an account? <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// };

// export default Login;

