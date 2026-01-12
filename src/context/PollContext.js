import { createContext, useContext } from "react";

export const PollContext = createContext(null);

export const usePoll = () => {
  const ctx = useContext(PollContext);
  if (!ctx) throw new Error("usePoll must be used inside PollProvider");
  return ctx;
};
