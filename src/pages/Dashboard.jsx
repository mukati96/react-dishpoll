import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Vote from "./Vote";
import Results from "./Results";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="vote" element={<Vote />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}
