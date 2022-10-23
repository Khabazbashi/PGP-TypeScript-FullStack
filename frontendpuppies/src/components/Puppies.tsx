import React from "react";
import Puppy from "./Puppy";
import ListPuppy from "./ListPuppy";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
  caller: String;
}

const Puppies = ({ puppies, caller }: PuppiesProps) => {
  if (caller === "home") {
    return (
      <div className="flex flex-row flex-wrap items-center justify-center">
        {puppies.map((puppy, key) => (
          <Puppy key={key} puppy={puppy} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="grid grid-cols-11 font-bold px-5 place-content-between grow pb-4">
          <p className="col-span-2 text-center">PuppyID</p>
          <p className="col-span-1">Name</p>
          <p className="col-span-2">Breed</p>
          <p className="col-span-5">Description</p>
          <p className="col-span-1 text-center">Remove</p>
        </div>
        {puppies.map((puppy, key) => (
          <ListPuppy key={key} puppy={puppy} />
        ))}
      </div>
    );
  }
};

export default Puppies;
