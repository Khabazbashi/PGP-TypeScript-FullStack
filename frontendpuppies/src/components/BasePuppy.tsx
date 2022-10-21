import React from "react";

interface BasePuppyProps {
  name: string;
  breed: string;
  description: string;
  image: string;
}

const BasePuppy = ({ name, breed, description, image }: BasePuppyProps) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>{breed}</p>
      <p>{description}</p>
      <p>{image}</p>
    </React.Fragment>
  );
};

export default BasePuppy;
