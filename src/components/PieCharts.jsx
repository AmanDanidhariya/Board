import  { useState } from 'react'
import { PieChart, Pie, Cell } from "recharts";
import pieChartData from "../chartData.json"


const COLORS = [
    "#0CD664", "#EE8484", "#F6DC7D"]; 

const PieCharts = ({chartData}) => {

 
  return (
    <>
        <PieChart width={200} height={200}>
      <Pie
        data={chartData}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="death"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </>
  )
}

export default PieCharts