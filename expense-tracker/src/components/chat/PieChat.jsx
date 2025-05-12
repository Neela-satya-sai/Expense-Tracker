import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, } from "recharts";
import { Typography } from "@mui/material";
import { useAppContext } from "../../AppContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const PieChat = () => {
  const { expenceList } = useAppContext();

  const [data, setData] = useState([]);

  // Function to calculate expense totals
  useEffect(() => {
    let totals = { food: 0, entertainment: 0, travel: 0, bills: 0 };

    expenceList.forEach(({ category, price }) => {
      if (totals.hasOwnProperty(category)) {
        totals[category] += Number(price);
      } else {
        totals.bills += Number(price);
      }
    });

    setData(Object.entries(totals).map(([name, value]) => ({ name, value })));
  }, [expenceList]); // Recalculate totals when `expenceList` updates

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "33vw", height: "33vw" }}>
      <Typography variant="h6" align="center">Expense Breakdown</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChat; 