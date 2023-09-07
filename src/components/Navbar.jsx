import {
  AiOutlineDashboard,
  AiOutlineSchedule,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { LiaUserCircleSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="leading-normal text-4xl text-white font-extrabold ml-10 py-6 text-montserrat">
        Board.
      </div>
      {/* navigation start */}
      <ul className="flex flex-col text-white text-xl text-semibold ml-10">
        <li className="flex active:font-bold hover:font-bold leading-5 py-4">
          <span className="mr-4">
            <AiOutlineDashboard size={20} />
          </span>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="flex active:font-bold hover:font-bold leading-5 py-4">
          <span className="mr-4">
            <BsTags size={20} />
          </span>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
        <li className="flex active:font-bold hover:font-bold leading-5 py-4">
          <span className="mr-4">
            <AiOutlineSchedule size={20} />
          </span>
          <NavLink to="/schedules">Schedules</NavLink>
        </li>
        <li className="flex active:font-bold hover:font-bold leading-5 py-4">
          <span className="mr-4">
            <LiaUserCircleSolid size={20} />
          </span>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="flex active:font-bold hover:font-bold leading-5 py-4">
          <span className="mr-4">
            <AiOutlineSetting size={20} />
          </span>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
      {/* navigation end */}

      <ul className="text-white text-lg  ml-10 mt-[140%]">
        <li className="py-2 hover:font-bold">
          <NavLink>Help</NavLink>
        </li>
        <li className="py-2 hover:font-bold">
          <NavLink>Contact Us</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
