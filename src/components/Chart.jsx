import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// eslint-disable-next-line react/prop-types
const Chart = ({ data }) => {
  return (
    <>
      <BarChart
        width={1000}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend align="right" verticalAlign="top" iconType="circle"/>
        <Bar dataKey="casesPerOneMillion" fill="#98D89E" barSize={40} />
        <Bar dataKey="recoveredPerOneMillion" fill="#EE8484" barSize={40} />
      </BarChart>
    </>
  );
};

export default Chart;
