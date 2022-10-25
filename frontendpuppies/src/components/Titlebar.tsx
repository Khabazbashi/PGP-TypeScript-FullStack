import React from "react";

const TitleBar = () => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-9 font-bold px-5 place-content-between grow pb-4">
      <p className="col-span-6 md:col-span-2 lg:text-center  ">Puppy ID</p>
      <p className="col-span-3 md:col-span-1  ">Name</p>
      <p className="hidden md:block md:col-span-2 ">Breed</p>
      <p className="hidden md:block md:col-span-3">Description</p>
      <p className="sm:col-span-3 md:col-span-1 text-center ">Remove</p>
    </div>
  );
};

export default TitleBar;
