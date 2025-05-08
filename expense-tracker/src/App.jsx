import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'
import Herobanner from './components/HeroBanner/Herobanner';
import Tile from "./components/Tile/Tile.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 style={{margin:"0px", padding:"10px 18px", color:"aliceblue"}}>Expense Tracker</h1>
     <Herobanner></Herobanner>   
    </>
  )
}

export default App
