import DishCard from "./DishCard";
import { useAuth } from "../context/AuthContext";
import { usePoll } from "../context/PollContext";

export default function DishList() {
  const { user } = useAuth();
  const { dishes, votes, vote } = usePoll();

  const userVotes = votes[user.username] || {};

  const handleSelect = (dishId, rank) => {
    vote(user.username, dishId, rank);
  };

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div style={listStyle}>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          rank={userVotes[dish.id]}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
