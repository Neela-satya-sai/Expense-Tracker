import React from 'react'
import { Grid } from '@mui/material'
import Styles  from "./GridTransactionSpending.module.css";
import Transactions from '../transactions/Transactions';
import TopExpences from '../topExpences/TopExpences';
import { useAppContext } from "../../AppContext";

const GridTransactionSpending = () => {
   let {expenceList} = useAppContext();
  //  console.log(expenceList);
  //  console.log(localStorage.getItem("expenceList"))

  
  //  console.log(expenceList[0]);
  return (
    <Grid container spacing={5} height={"50vh"} margin={"12px 12px"}> 
      <Grid item xs={12} md={7}  >
        <h3 className={Styles.header}>Recent Transations</h3>
         {expenceList.map((eachExpence)=>  <Transactions data={eachExpence}></Transactions> )}
       
      </Grid>
      <Grid item xs={12} md={5} >
        <TopExpences></TopExpences>
      </Grid>
    
    </Grid>
  )
}

export default GridTransactionSpending;