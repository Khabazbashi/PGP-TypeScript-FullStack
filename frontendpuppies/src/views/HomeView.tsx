import React from "react";
import Puppies from "../components/Puppies";
import { Puppy as IPuppy } from "../interfaces/puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
}

const Home = ({ puppies }: PuppiesProps) => {
  return (
    <React.Fragment>
      <Puppies puppies={puppies} />
    </React.Fragment>
  );
};

export default Home;
