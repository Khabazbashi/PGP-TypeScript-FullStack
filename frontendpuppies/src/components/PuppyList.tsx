import React from "react";
import Puppy from "./Puppy";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface PuppyListProps {
  puppies: IPuppy[];
}

const PuppiesList = ({ puppies }: PuppyListProps) => {
  return (
    <div className="flex flex-row flex-wrap">
      {puppies.map((puppy, key) => (
        <Puppy key={key} puppy={puppy} />
      ))}
    </div>
  );
};

export default PuppiesList;
