import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [income, setIncome] = useState(Number(localStorage.getItem("income")) || 5000);
  const [expence, setExpence] = useState(Number(localStorage.getItem("expence")) || 0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expence", expence);
  }, [income, expence]);

  return (
    <AppContext.Provider value={{ income, setIncome, expence, setExpence, isModalOpen, setModalOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);