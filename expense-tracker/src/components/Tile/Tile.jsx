import React from "react";
import Styles from "./Tile.module.css";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useAppContext } from "../../AppContext";

const Tile = ({ amount, title, type }) => {
  let { isModalOpen, setModalOpen, isModalOpen2, setModalOpen2 } =
    useAppContext();
  // console.log(isModalOpen);

  // console.log(title,amount,type);
  return (
    <Stack className={Styles.tile} alignItems="center">
      <h1>
        {type}: ₹{amount}
      </h1>
      <Button
        variant="contained"
        onClick={
          type === "Expences"
            ? () => setModalOpen2(true)
            : () => setModalOpen(true)
        }
      >
        {title}
      </Button>
    </Stack>
  );
};

export default Tile;
