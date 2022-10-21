import React, { useState, useEffect } from "react";
import { FetchPuppies } from "./puppies.api";
import { Puppy as IPuppy } from "./puppy.interface";
import PuppiesList from "./components/PuppiesList";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    FetchPuppies<IPuppy[]>("http://localhost:7000/api/puppies/").then(
      (puppies) => {
        let puppiesList: IPuppy[] = puppies;
        console.log(puppiesList);
        setPuppies(puppiesList);
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen	bg-[#282c34] items-center justify-center text-center">
      <h1 className="font-mono text-6xl my-16 px-6">Happy Dogs</h1>
      <PuppiesList puppies={puppies} />
    </div>
  );
}

export default App;
