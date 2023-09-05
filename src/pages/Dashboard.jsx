import Navbar from "../components/Navbar";
import TotalCount from "../components/TotalCount";
import BoardNav from "../components/BoardNav";
import data from "../totalCount.json"

import { useState } from "react";

const Dashboard = () => {
const [card , setCard] = useState(data);
console.log(card.Icon);


  return (
    <div className="p-8 flex">
   
      <div className="w-[280px] navbar_background h-[90vh] rounded-2xl">
        <Navbar />
      </div>
      <div className="flex flex-col ml-8">
        <div className="my-4">
          <BoardNav />
        </div>
        <div className="flex">
          <TotalCount data={card}/>
        </div>
      </div>
   
    </div>
  );
};

export default Dashboard;
