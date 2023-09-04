import React from "react";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <div className="p-8">
      <div className="w-[280px] navbar_background h-[90vh] rounded-2xl">
        <Navbar />
      </div>
      <div className="text-4xl text-center font-bold mt-[15%]">Settings</div>
    </div>
  );
};

export default Settings;
