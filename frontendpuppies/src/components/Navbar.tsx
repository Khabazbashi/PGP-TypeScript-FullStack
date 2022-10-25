import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    background: "#FF4500",
  };
  return (
    <ul className="flex flex-wrap flex-row  w-full text-white font-bold bg-[#48261c] sm:place-content-between md:justify-start xl:max-w-[100em]">
      <li>
        <NavLink
          className="flex h-[100%] py-5 px-4"
          to="/"
          end
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex h-[100%] py-5 px-4"
          to="/addpuppy"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Add Puppy
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex h-[100%] py-5 px-4"
          to="/removepuppy"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Remove Puppy
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
