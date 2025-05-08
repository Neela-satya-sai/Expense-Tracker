import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tile from "../Tile/Tile.jsx";
import Styles from "./HeroBanner.module.css";

const Herobanner = () => {
  return (
    <Stack spacing={3} direction={'row'} className={Styles.herobanner}> 

       <Tile></Tile>
       <Tile></Tile>
    </Stack>
  )
}

export default Herobanner;