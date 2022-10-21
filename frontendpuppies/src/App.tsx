import React, { useState, useEffect } from "react";
import { FetchPuppies } from "./puppies.api";
import { Puppy } from "./puppy.interface";
import PuppiesList from "./components/PuppiesList";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState<Puppy[]>([]);

  useEffect(() => {
    FetchPuppies<Puppy[]>("http://localhost:7000/api/puppies/").then(
      (puppies) => {
        let puppiesList: Puppy[] = puppies;
        console.log(puppiesList);
        setPuppies(puppiesList);
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <PuppiesList puppies={puppies} />
      </header>
    </div>
  );
}

export default App;
