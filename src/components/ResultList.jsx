import { useAuth } from "../context/AuthContext";
import { usePoll } from "../context/PollContext";

export default function ResultList() {
  const { user } = useAuth();
  const { getResults, votes } = usePoll();

  const results = getResults();
  const userVotes = votes[user.username] || {};

  const resultCardStyle = (voted) => ({
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: voted ? "#dff0d8" : "#fff",
    boxShadow: voted ? "0 2px 8px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease",
  });

  const titleStyle = {
    margin: "0 0 8px 0",
    fontSize: "1.1rem",
    color: "#333",
  };

  const rankStyle = {
    margin: 0,
    fontSize: "0.95rem",
    color: "#555",
  };

  return (
    <div>
      {results.map((dish, idx) => {
        const voted = !!userVotes[dish.id];
        return (
          <div key={dish.id} style={resultCardStyle(voted)}>
            <h3 style={titleStyle}>
              {idx + 1}. {dish.dishName} - {dish.points} pts
            </h3>
            {voted && <p style={rankStyle}>Your Rank: {userVotes[dish.id]}</p>}
          </div>
        );
      })}
    </div>
  );
}
