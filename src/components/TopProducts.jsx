import { useState } from "react";
import PieCharts from "./PieCharts";
import pieChartData from "../PieChart.json";

const TopProducts = () => {
  const [chartData] = useState(pieChartData);

  return (
    <div className="w-[50%] h-64  shadow-lg bg-white rounded-xl mt-8 p-2">
      <div className="flex justify-around leading-5 mt-2 text-xl">
        <div className="font-montserrat font-bold">Top Countries</div>
        <div className="text-sm text-gray-400">May-june 2021</div>
      </div>
      <div className="flex">
        <div className="flex w-[50%] justify-center">
          <PieCharts chartData={chartData} />
        </div>
        <div className="mt-6 w-[50%] ">
          <ul className="flex flex-col">
            <div className="flex my-3">
              <li className="w-2 h-2 p-1 mt-2 bg-[#EE8484] rounded-full"></li>
              <li className="font-bold ml-3">Afghanistan Deaths</li>
            </div>
            <div className="flex my-3">
              <li className="w-2 h-2 p-1 mt-2 bg-[#98D89E] rounded-full"></li>
              <li className="font-bold ml-3">Albania Deaths</li>
            </div>
            <div className="flex my-3">
              <li className="w-2 h-2 p-1 mt-2 bg-[#F6DC7D] rounded-full"></li>
              <li className="font-bold ml-3">Algeria Deaths</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
