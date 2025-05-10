import { createContext, useContext, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";
import Herobanner from "./components/Herobanner/Herobanner";
import Tile from "./components/Tile/Tile.jsx";
import GridTransactionSpending from "./components/Grid/GridTransactionSpending.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import AddBalance from "./components/modal/AddBalance.jsx";
import { AppProvider, useAppContext } from "./AppContext";


function App() {


 
//  let{isModalOpen, setModalOpen} = useAppContext;
//    console.log("from app",isModalOpen);


  return (
    <>
      {/* <AppContext.Provider value={{ isModalOpen, setModalOpen }}>
        <h1 style={{ margin: "0px", padding: "10px 18px", color: "aliceblue" }}>
          Expense Tracker
        </h1>
        <Herobanner data={[income, expence]}></Herobanner>
        <GridTransactionSpending></GridTransactionSpending>
        <AddBalance isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </AppContext.Provider> */}

      <AppProvider>
      <h1 style={{ margin: "0px", padding: "10px 18px", color: "aliceblue" }}>Expense Tracker</h1>
      <Herobanner />
      <GridTransactionSpending />
      <AddBalance />
   
    </AppProvider>


      {/* <Router>
       <Routes>
           <Route></Route>
       </Routes>
     </Router> */}
    </>
  );
}

export default App;
