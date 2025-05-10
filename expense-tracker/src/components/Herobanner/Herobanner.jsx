import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tile from "../Tile/Tile.jsx";
import Styles from "./HeroBanner.module.css";
import PieChat from '../chat/PieChat.jsx';
import { useAppContext } from '../../AppContext.jsx';

const Herobanner = () => {
  let {income,expence} = useAppContext();
  // console.log(Styles);
  //  console.log(income,expence);
  return (
    <Stack spacing={3} direction={'row'} className={Styles.herobanner}> 
      
       <Tile amount={income} title={"+Add Income"} type ={"Wallet Balance"}></Tile>
       <Tile amount={expence} title={"+Add Expences"} type={"Expences"}></Tile>
       <PieChat></PieChat>
    </Stack>
  )
}

export default Herobanner;