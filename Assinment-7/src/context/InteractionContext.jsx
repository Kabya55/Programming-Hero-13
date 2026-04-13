import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (type, friend) => {
    const newInteraction = {
      id: Date.now(),
      type,
      name: friend.name,
      message:
        type === "call"
          ? "Had a call"
          : type === "text"
            ? "Sent a message"
            : "Video chat",
      date: new Date().toLocaleDateString(),
    };

    setInteractions((prev) => [newInteraction, ...prev]);
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;
