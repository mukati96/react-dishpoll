import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    try {
      login(username, password);
      navigate("/dashboard/vote");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#f0f2f5",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <div style={{
        background: "#fff",
        padding: "50px 35px",
        borderRadius: "12px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "30px", color: "#333" }}>Dish Poll Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px 15px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px 15px",
              marginBottom: "25px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            Login
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
      </div>
    </div>
  );
}
