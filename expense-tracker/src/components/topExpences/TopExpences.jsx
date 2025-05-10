import React from 'react'
import { Box } from '@mui/material'
import Styles from "./TopExpences.module.css"
import BarChat from '../chat/BarChat'

const TopExpences = () => {
  return (
    <>
     <h3 className={Styles.header}>Top Spendes</h3>
    <Box className={Styles.topExpences}>
       <BarChat className={Styles.barChat} ></BarChat>
    </Box>
    </>
   
  )
}

export default TopExpences