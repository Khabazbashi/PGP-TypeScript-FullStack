import React from "react";
import BasePuppy from "./BasePuppy";
import { Puppy } from "../puppy.interface";

interface PuppiesProps {
  puppies: Puppy[];
}

const PuppiesList = ({ puppies }: PuppiesProps) => {
  return (
    <React.Fragment>
      <ul>
        {puppies.map((puppy, key) => (
          <BasePuppy
            key={key}
            name={puppy.name}
            breed={puppy.breed}
            description={puppy.description}
            image={puppy.image}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PuppiesList;
