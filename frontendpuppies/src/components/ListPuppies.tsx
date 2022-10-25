import React from "react";
import ListPuppy from "./ListPuppy";
import { IPuppy } from "../interfaces/puppy.interface";

interface ListPuppiesProps {
  puppies: IPuppy[];
  onDelete: (id: number) => void;
}

const ListPuppies = ({ puppies, onDelete }: ListPuppiesProps) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-11 font-bold px-5 place-content-between grow pb-4">
        <p className="col-span-2 text-center">Puppy ID</p>
        <p className="col-span-1">Name</p>
        <p className="col-span-2">Breed</p>
        <p className="col-span-5">Description</p>
        <p className="col-span-1 text-center">Remove</p>
      </div>
      {puppies.map((puppy, key) => (
        <ListPuppy key={key} puppy={puppy} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListPuppies;
