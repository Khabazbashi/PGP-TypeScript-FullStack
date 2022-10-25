import React from "react";
import Puppy from "./Puppy";
import { IBasePuppy } from "../interfaces/puppy.interface";

interface PuppiesProps {
  puppies: IBasePuppy[];
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
