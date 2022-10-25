import React from "react";
import PuppyForm from "../components/PuppyForm";
import { IBasePuppy } from "../interfaces/puppy.interface";

interface PostProps {
  onCreate: (postRequest: IBasePuppy) => void;
}

const PostPuppy = ({ onCreate }: PostProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-20 mb-10 font-mono">Add a new puppy</h1>
      <PuppyForm onCreate={onCreate} />
    </div>
  );
};

export default PostPuppy;
