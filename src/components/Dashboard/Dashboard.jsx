import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "Alice", maths: 79, english: 83, science: 72 },
    { id: 2, name: "Bob", maths: 91, english: 87, science: 82 },
    { id: 3, name: "Charlie", maths: 69, english: 72, science: 65 },
    { id: 4, name: "David", maths: 92, english: 90, science: 90 },
    { id: 5, name: "Emily", maths: 80, english: 83, science: 83 },
    { id: 6, name: "Frank", maths: 71, english: 68, science: 70 },
    { id: 7, name: "Grace", maths: 88, english: 86, science: 85 },
    { id: 8, name: "Henry", maths: 75, english: 80, science: 74 },
    { id: 9, name: "Isabella", maths: 85, english: 90, science: 82 },
    { id: 10, name: "Jacob", maths: 94, english: 91, science: 89 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey="maths" stroke="#82ca9d"></Line>
        <Line dataKey="english" stroke="#82ca9d"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
