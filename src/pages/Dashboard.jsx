import Navbar from "../components/Navbar";
import TotalCount from "../components/TotalCount";
import BoardNav from "../components/BoardNav";
import data from "../totalCount.json";
import chartData from "../chartData.json";
import { useState } from "react";
import Chart from "../components/Chart";
import TopProducts from "../components/TopProducts";

const Dashboard = () => {
  const [card] = useState(data);
  const [barData] = useState(chartData);

  return (
    <div className="p-6 flex overflow-hidden">
      <div className="w-[280px] navbar_background h-[125vh] rounded-2xl">
        <Navbar />
      </div>
      <div className="flex flex-col ml-8">
        <div className="my-4">
          <BoardNav />
        </div>
        <div className="flex">
          <TotalCount data={card} />
        </div>

        <div className="flex flex-col mt-8 rounded-xl p-4 shadow-lg">
          <div className="text-2xl font-montserrat font-bold">Activities</div>
          <div className="text-sm font-montserrat text-gray-400">
            May-June 2021
          </div>
          {barData.length > 0 ? <Chart data={barData} /> : <p>Loading...</p>}
        </div>
        <div>
          <TopProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
