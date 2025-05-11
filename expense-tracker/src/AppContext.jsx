import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [income, setIncome] = useState(Number(localStorage.getItem("income")) || 0);
  const [expences, setExpences] = useState(Number(localStorage.getItem("expences")) || 0);
  const [expenceList, setExpenceList] = useState( JSON.parse(localStorage.getItem("expenceList") || "[]")  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2 ]  = useState(false);

  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expences", expences);
  }, [income, expences]);
  
  useEffect(() => {
    localStorage.setItem("expenceList", JSON.stringify(expenceList));
  }, [expenceList]);

  return (
    <AppContext.Provider value={{ income, setIncome, expences, setExpences, expenceList, setExpenceList, isModalOpen, setModalOpen, isModalOpen2, setModalOpen2 }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);