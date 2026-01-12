import React from "react";

export default function DishCard({ dish, rank, onSelect }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, boxShadow 0.2s ease",
  };

  const cardHoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    margin: "0 0 8px 0",
    fontSize: "1.2rem",
    color: "#333",
  };

  const descStyle = {
    margin: "0 0 12px 0",
    fontSize: "0.95rem",
    color: "#666",
  };

  const selectStyle = {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, cardHoverStyle)
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, { transform: "none", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" })
      }
    >
      <img src={dish.image} alt={dish.dishName} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{dish.dishName}</h3>
        <p style={descStyle}>{dish.description}</p>
        <select
          value={rank || ""}
          onChange={(e) => onSelect(dish.id, Number(e.target.value) || null)}
          style={selectStyle}
        >
          <option value="">No rank</option>
          <option value={1}>Rank 1 (30 pts)</option>
          <option value={2}>Rank 2 (20 pts)</option>
          <option value={3}>Rank 3 (10 pts)</option>
        </select>
      </div>
    </div>
  );
}
