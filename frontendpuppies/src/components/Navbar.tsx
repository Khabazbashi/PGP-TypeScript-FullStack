import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-wrap flex-row  w-full text-white font-bold bg-[#48261c]">
      <li>
        <NavLink
          className="flex h-[100%] p-4"
          to="/Home"
          style={({ isActive }) => ({
            background: isActive ? "#FF4500" : "#48261c",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex h-[100%] p-4"
          to="/AddPuppy"
          style={({ isActive }) => ({
            background: isActive ? "#FF4500" : "#48261c",
          })}
        >
          Add Puppy
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex h-[100%] p-4"
          to="/RemovePuppy"
          style={({ isActive }) => ({
            background: isActive ? "#FF4500" : "#48261c",
          })}
        >
          Remove Puppy
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
