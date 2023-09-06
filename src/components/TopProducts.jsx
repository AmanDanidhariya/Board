import React, { useState } from "react";
import PieCharts from "./PieCharts";
import pieChartData from "../chartData.json"

const TopProducts = () => {
    const [chartData] = useState(pieChartData.slice(0,3));
  return (
    <div className="w-[50%] h-64  shadow-lg bg-white rounded-xl mt-8 p-2">
      <div className="flex justify-around leading-5 mt-2 text-xl">
        <div className="font-montserrat font-bold">Top products</div>
        <div className="text-sm text-gray-400">May-june 2021</div>
      </div>
      <div className="flex">
        <div className="flex w-[50%] justify-center">
          <PieCharts chartData={chartData}/>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default TopProducts;
