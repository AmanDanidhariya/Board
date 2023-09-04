import React from "react";
import Navbar from "../components/Navbar";

const Users = () => {
  return (
    <div className="p-8">
      <div className="w-[280px] navbar_background h-[90vh] rounded-2xl">
        <Navbar />
      </div>
      <div className="text-4xl text-center font-bold mt-[15%]">Users</div>
    </div>
  );
};

export default Users;
