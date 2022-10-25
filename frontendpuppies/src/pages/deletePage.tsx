import React from "react";
import ListPuppies from "../components/ListPuppies";
import { IPuppy } from "../interfaces/puppy.interface";

interface DeleteProps {
  puppies: IPuppy[];
  onDelete: (id: number) => void;
}

const DeletePuppy = ({ puppies, onDelete }: DeleteProps) => {
  return (
    <React.Fragment>
      <ListPuppies puppies={puppies} onDelete={onDelete} />
    </React.Fragment>
  );
};

export default DeletePuppy;
