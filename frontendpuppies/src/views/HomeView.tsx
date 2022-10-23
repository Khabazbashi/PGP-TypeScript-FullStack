import React from "react";
import PuppyList from "../components/PuppyList";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
}

const Home = ({ puppies }: PuppiesProps) => {
  return (
    <React.Fragment>
      <PuppyList puppies={puppies} />
    </React.Fragment>
  );
};

export default Home;
