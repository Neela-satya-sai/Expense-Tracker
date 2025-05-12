import React from "react";
import { Grid, Typography, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppContext } from "../../AppContext";

const ExpenseItem = ({ data}) => {
  let { category, date, price, title } = data;
  let {
    income,
    setIncome,
    isModalOpen2,
    setModalOpen2,
    expences,
    setExpences,
    expenceList,
    setExpenceList,
  } = useAppContext();

  // let [edit, setEdit] = useState("");

  function onDelete() {
    console.log("clicked delete");
    setIncome((prev) => prev + Number(price));
    setExpences((prev) => prev - Number(price));
    let filteredList = expenceList.filter(
      (eachExpence) => eachExpence.title != title
    );
    setExpenceList(filteredList);
  }
  function onEdit() {
    console.log("clicked edit");
    // onDelete();
    setModalOpen2(true);
    
  }
  return (
    <Paper
      elevation={3}
      sx={{ padding: 2, display: "flex", alignItems: "center", gap: 2 }}
    >
      {/* Icon Placeholder */}
      <div
        style={{
          width: 40,
          height: 40,
          background: "#DDA15E",
          borderRadius: "50%",
        }}
      ></div>

      {/* Expense Details */}
      <Grid container sx={{ flexGrow: 1 }} direction={"column"}>
        <Grid item xs={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Grid>
      </Grid>

      {/* Amount */}
      <Typography variant="h6" color="warning.main">
        ₹{price}
      </Typography>

      {/* Action Buttons */}
      <IconButton color="error" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton color="warning" onClick={onEdit}>
        <EditIcon />
      </IconButton>
    </Paper>
  );
};

export default ExpenseItem;
