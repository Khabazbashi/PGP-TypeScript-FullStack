import React from "react";
import Puppies from "../components/Puppies";
import { IBasePuppy } from "../interfaces/puppy.interface";

interface HomeProps {
  puppies: IBasePuppy[];
}

const Home = ({ puppies }: HomeProps) => {
  return (
    <React.Fragment>
      <Puppies puppies={puppies} />
    </React.Fragment>
  );
};

export default Home;
