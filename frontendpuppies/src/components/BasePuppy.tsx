import React from "react";

interface BasePuppyProps {
  name: string;
  breed: string;
  description: string;
  image: string;
}

const BasePuppy = ({ name, breed, description, image }: BasePuppyProps) => {
  return (
    <div className="bg-white m-10">
      <img src={image} />
      <h2 className="text-2xl pt-4 px-4">{name}</h2>
      <p className="italic px-4">{breed}</p>
      <p className="p-4">{description}</p>
    </div>
  );
};

export default BasePuppy;
