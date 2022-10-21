import React from "react";
import PuppiesList from "./components/PuppiesList";
import { Puppy as IPuppy } from "./puppy.interface";

interface PuppiesProps {
  puppies: IPuppy[];
}

const Home = ({ puppies }: PuppiesProps) => {
  return (
    <React.Fragment>
      <PuppiesList puppies={puppies} />
    </React.Fragment>
  );
};

export default Home;
