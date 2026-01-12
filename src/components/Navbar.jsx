import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      borderBottom: "1px solid #e0e0e0",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      borderRadius: "12px 12px 0 0",
      marginBottom: "20px"
    }}>
      {/* Left Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/dashboard/vote"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "500",
            transition: "color 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.color = "#0056b3"}
          onMouseOut={e => e.currentTarget.style.color = "#007bff"}
        >
          Vote
        </Link>
        <Link
          to="/dashboard/results"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "500",
            transition: "color 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.color = "#0056b3"}
          onMouseOut={e => e.currentTarget.style.color = "#007bff"}
        >
          Results
        </Link>
      </div>

      {/* Right User Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontWeight: "500", color: "#333" }}>{user?.username}</span>
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#dc3545",
            color: "#fff",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#c82333"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#dc3545"}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
