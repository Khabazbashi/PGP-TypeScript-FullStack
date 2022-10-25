import React from "react";
import { IBasePuppy } from "../interfaces/puppy.interface";

interface PuppyProps {
  puppy: IBasePuppy;
}

const Puppy = ({ puppy }: PuppyProps) => {
  return (
    <div className="flex flex-col bg-white m-10 h-96 w-80 max-h-96">
      <img
        className="h-[12rem] object-cover"
        src={puppy.image}
        alt="Very Nice Puppy"
      />

      <div className="flex flex-col grow  overflow-y-scroll	">
        <h2 className="text-2xl pt-4 px-4">{puppy.name}</h2>
        <p className="italic px-4">{puppy.breed}</p>
        <p className="p-4">{puppy.description}</p>
      </div>
    </div>
  );
};

export default Puppy;
