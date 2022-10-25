import React from "react";
import ListPuppy from "./ListPuppy";
import { IPuppy } from "../interfaces/puppy.interface";
import Titlebar from "./Titlebar";
import "../index.css";

interface ListPuppiesProps {
  puppies: IPuppy[];
  onDelete: (id: number) => void;
}

const ListPuppies = ({ puppies, onDelete }: ListPuppiesProps) => {
  return (
    <div className="flex flex-col">
      <Titlebar />
      {puppies.map((puppy, key) => (
        <ListPuppy key={key} puppy={puppy} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListPuppies;
