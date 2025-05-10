import React from 'react'
import { Grid } from '@mui/material'
// import Styles "./GridTransactionSpending.module.css"
import Transactions from '../transactions/Transactions';
import TopExpences from '../topExpences/TopExpences';

const GridTransactionSpending = () => {
  return (
    <Grid container spacing={5} height={"50vh"} margin={"12px 12px"}> 
      <Grid item size={7} > 
        <Transactions></Transactions>
      </Grid>
      <Grid item  size={5}>
        <TopExpences></TopExpences>
      </Grid>
    
    </Grid>
  )
}

export default GridTransactionSpending;