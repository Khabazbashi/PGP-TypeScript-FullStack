import React from "react";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface BasePuppyProps {
  puppy: IPuppy;
}

const BasePuppy = ({ puppy }: BasePuppyProps) => {
  return (
    <div className="flex flex-col bg-white m-10 h-96 w-80 max-h-96">
      <div className="h-1/2 bg-black ">
        <img className="h-[15rem] object-cover" src={puppy.image} />
      </div>
      <div className="flex flex-col grow bg-red-500 overflow-y-scroll	">
        <h2 className="text-2xl pt-4 px-4">{puppy.name}</h2>
        <p className="italic px-4">{puppy.breed}</p>
        <p className="p-4">{puppy.description}</p>
      </div>
    </div>
  );
};

export default BasePuppy;
