import React from "react";
import { Box } from "@mui/material";
import Styles from "./Transactions.module.css";
import { FaPen } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PencilIcon from "../../assets/pencile.svg";


const Transactions = ({data}) => {
  let {category, title, price, date} = data;
  console.log(data);
  return (
    <>
     
      <Box className={Styles.transactions}>
        <Box className={Styles.transaction}>
          {category} {title} {date} 
          <Box className={Styles.icons}>{price}  <FaPen/> <IoIosCloseCircleOutline /></Box>

        </Box>
        {/* <Box className={Styles.transaction}>
          Transaction 2
          <Box className={Styles.icons}> <img src={PencilIcon} alt="Pencile Icon"/> <IoIosCloseCircleOutline /></Box>

        </Box> */}
      </Box>
    </>
  );
};

export default Transactions;
