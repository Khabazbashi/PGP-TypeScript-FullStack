import React, { useState, useEffect } from "react";
import { FetchPuppies } from "./puppies.api";
import { Puppy as IPuppy } from "./puppy.interface";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import AddPuppy from "./AddPuppy";
import "./App.css";
import PuppiesList from "./components/PuppiesList";

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
    <HashRouter>
      <div className="flex flex-col min-h-screen w-screen	bg-[#282c34] items-center justify-center text-center">
        <h1 className="font-mono text-6xl my-16 px-6">Happy Dogs</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AddPuppy">Add Puppy</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home puppies={puppies} />} />
            <Route path="/AddPuppy" element={<AddPuppy />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
