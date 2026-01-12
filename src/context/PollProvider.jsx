import { useEffect, useState } from "react";
import { PollContext } from "./PollContext";
import * as pollConstants from "./poll.constants";

export const PollProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [votes, setVotes] = useState(JSON.parse(localStorage.getItem("votes")) || {});

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then(res => res.json())
      .then(setDishes)
      .catch(err => console.error("Dish fetch failed", err));
  }, []);

  const vote = (username, dishId, rank) => {
    setVotes(prev => {
      const userVotes = { ...(prev[username] || {}) };
      Object.keys(userVotes).forEach(id => {
        if (userVotes[id] === rank) delete userVotes[id];
      });
      if (!rank) delete userVotes[dishId];
      else userVotes[dishId] = rank;

      const updated = { ...prev, [username]: userVotes };
      localStorage.setItem("votes", JSON.stringify(updated));
      return updated;
    });
  };

  const getResults = () => {
    const scoreMap = {};
    Object.values(votes).forEach(userVotes => {
      Object.entries(userVotes).forEach(([dishId, rank]) => {
        scoreMap[dishId] = (scoreMap[dishId] || 0) + pollConstants.POINTS[rank];
      });
    });
    return dishes.map(d => ({ ...d, points: scoreMap[d.id] || 0 })).sort((a, b) => b.points - a.points);
  };

  return <PollContext.Provider value={{ dishes, votes, vote, getResults }}>{children}</PollContext.Provider>;
};
