import React from "react";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";
import { RemovePuppy } from "../puppies.api";
import TrashIcon from "../utils/trashcan.svg";

interface BasePuppyProps {
  puppy: IPuppy;
}

const ListPuppy = ({ puppy }: BasePuppyProps) => {
  const handleSubmit = () => {
    console.log(puppy.id);
    RemovePuppy("http://localhost:7000/api/puppies/" + puppy.id);
  };

  return (
    <div className="grid grid-cols-11 px-5 place-content-between grow py-2 border-b-[1px]	border-slate-300 hover:bg-[#e5a431]">
      <p className="col-span-2 text-center py-2 ">{puppy.id}</p>
      <p className="col-span-1 my-auto">{puppy.name}</p>
      <p className="col-span-2 my-auto">{puppy.breed}</p>
      <p className="col-span-5 truncate my-auto">{puppy.description}</p>
      <button className="col-span-1 m-auto" type="button">
        <img src={TrashIcon} onClick={handleSubmit} alt="TrashButton" />
      </button>
    </div>
  );
};

export default ListPuppy;
