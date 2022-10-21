import React from "react";
import BasePuppy from "./BasePuppy";
import { Puppy as IPuppy } from "../puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
}

const PuppiesList = ({ puppies }: PuppiesProps) => {
  return (
    <div className="flex flex-row flex-wrap">
      {puppies.map((puppy, key) => (
        <BasePuppy
          key={key}
          name={puppy.name}
          breed={puppy.breed}
          description={puppy.description}
          image={puppy.image}
        />
      ))}
    </div>
  );
};

export default PuppiesList;
