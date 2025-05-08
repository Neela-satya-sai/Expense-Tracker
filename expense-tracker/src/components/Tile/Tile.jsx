import React from 'react'
import Styles from "./Tile.module.css"
import { Stack } from '@mui/material'
import { Button } from '@mui/material'
const Tile = () => {
  return (  
    <Stack className={Styles.tile} alignItems="center" >
            <h1>Wallet Balance: $6000</h1>
            <Button variant="contained" >Contained expence</Button>
    </Stack>
 
  )
}

export default Tile;