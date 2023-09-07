import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ProfileForm from "./ProfileForm";
import { Outlet, useNavigate } from "react-router-dom";
import BasicForm from "./BasicForm";

const AddProfile = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(true);
    navigate("/addprofile");
  };

  function handleClose() {
    setShowForm(false);
    console.log("clicked");
  }

  return (
    <div className="flex flex-col justify-center items-center hover:cursor-pointer ">
      <div className=" bg-gray-200 rounded-full w-[20%] p-3 mt-[10%] ">
        <AiOutlinePlus size={40} onClick={toggleForm} className="ml-4" />
      </div>
      <div className="text-gray-400">Add Profile</div>
      {showForm && <ProfileForm handleClose={handleClose} />}
      <Outlet />
    </div>
  );
};

export default AddProfile;
