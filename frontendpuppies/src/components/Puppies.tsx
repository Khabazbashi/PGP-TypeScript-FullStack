import React from "react";
import Puppy from "./Puppy";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
}

const Puppies = ({ puppies }: PuppiesProps) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {puppies.map((puppy, key) => (
        <Puppy key={key} puppy={puppy} />
      ))}
    </div>
  );
};

export default Puppies;
