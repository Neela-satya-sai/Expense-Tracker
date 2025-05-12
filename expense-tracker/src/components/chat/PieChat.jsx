import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Typography, Grid, Box } from "@mui/material";
import { useAppContext } from "../../AppContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChat = () => {
  const { expenceList } = useAppContext();
  const [data, setData] = useState([]);

  // Function to calculate expense totals
  useEffect(() => {
    let totals = { food: 0, entertainment: 0, travel: 0, bills: 0 };

    if (!expenceList || expenceList.length === 0) {
      setData([]);
      return;
    }

    expenceList.forEach(({ category, price }) => {
      if (totals.hasOwnProperty(category)) {
        totals[category] += Number(price);
      } else {
        totals.bills += Number(price);
      }
    });

    setData([
      { name: "food", value: totals.food, color: COLORS[0] },
      { name: "entertainment", value: totals.entertainment, color: COLORS[1] },
      { name: "travel", value: totals.travel, color: COLORS[2] },
      { name: "bills", value: totals.bills, color: COLORS[3] },
    ]);
  }, [expenceList]);

  return (
    <Box sx={{ width: "33vw", height: "40vw", textAlign: "center" }}>
      <Typography variant="h6" color="white">Expense Breakdown</Typography>

      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Bottom Labels */}
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        {data.map(({ name, color }) => (
          <Grid
            item
            key={name}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: color,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body2">{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PieChat;
