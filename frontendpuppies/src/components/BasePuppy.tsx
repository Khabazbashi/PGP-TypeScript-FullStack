import React from "react";
import { Puppy as IPuppy } from "../puppy.interface";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";

interface BasePuppyProps {
  puppy: IPuppy;
}

const BasePuppy = ({ puppy }: BasePuppyProps) => {
  return (
    <div className="bg-white m-10">
      <img src={puppy.image} />
      <h2 className="text-2xl pt-4 px-4">{puppy.name}</h2>
      <p className="italic px-4">{puppy.breed}</p>
      <p className="p-4">{puppy.description}</p>
    </div>
  );
};

export default BasePuppy;
