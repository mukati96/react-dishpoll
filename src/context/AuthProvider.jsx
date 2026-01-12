import { useState } from "react";
import { AuthContext } from "./AuthContext";
import users from "../data/users.json";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) throw new Error("Invalid credentials");
    localStorage.setItem("user", JSON.stringify(found));
    setUser(found);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
