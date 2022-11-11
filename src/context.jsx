import React, { useContext, useEffect, useState } from "react";

const Context = React.createContext();

export const AppProvider = ({ children }) => {
  const [score, setScore] = useState(() => {
    if (window?.localStorage?.score) return +window.localStorage.score || 0;
    return 0;
  });

  const [rulesIsOpen, setRulesIsOpen] = useState(false);
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    localStorage.score = score;
  }, [score]);

  return (
    <Context.Provider
      value={{
        score,
        setScore,
        rulesIsOpen,
        setRulesIsOpen,
        choice,
        setChoice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
