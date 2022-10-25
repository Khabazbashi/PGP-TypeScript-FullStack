import React from "react";
import { IPuppy } from "../interfaces/puppy.interface";
import TrashIcon from "../utils/trashcan.svg";

interface ListPuppyProps {
  puppy: IPuppy;
  onDelete: (id: number) => void;
}

const ListPuppy = ({ puppy, onDelete }: ListPuppyProps) => {
  const handleSubmit = () => {
    onDelete(puppy.id);
  };

  return (
    <div className="grid grid-cols-12 md:grid-cols-9 px-5 place-content-between grow py-2 border-b-[1px]	border-slate-300 hover:bg-[#e5a431]">
      <p className="col-span-6 md:col-span-2 lg:text-center py-2 ">
        {puppy.id}
      </p>
      <p className="col-span-4 md:col-span-1 my-auto truncate">{puppy.name}</p>
      <p className="hidden md:block md:col-span-2 my-auto truncate">
        {puppy.breed}
      </p>
      <p className="hidden md:block md:col-span-3 truncate my-auto">
        {puppy.description}
      </p>
      <button className="col-span-1 m-auto" type="button">
        <img src={TrashIcon} onClick={handleSubmit} alt="TrashButton" />
      </button>
    </div>
  );
};

export default ListPuppy;
