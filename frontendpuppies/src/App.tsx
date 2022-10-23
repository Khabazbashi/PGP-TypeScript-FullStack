import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { FetchPuppies } from "./puppies.api";
import { Puppy as IPuppy } from "./interfaces/puppy.interface";
import Home from "./views/HomeView";
import CreatePuppyView from "./views/AddPuppyView";
import RemovePuppyView from "./views/RemovePuppyView";

function App() {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    FetchPuppies<IPuppy[]>("http://localhost:7000/api/puppies/").then(
      (puppies) => {
        let puppiesList: IPuppy[] = puppies;
        setPuppies(puppiesList);
      }
    );
  }, []);

  return (
    <HashRouter>
      <div className="App flex flex-col min-h-screen w-full bg-[#d9e3e0] items-center p-10 border-[20px] border-[#48261c]">
        <h1 className="font-mono text-center text-4xl py-10 md:text-6xl md:pt-56 md:pb-10">
          Happy Dogs
        </h1>
        <ul className="flex flex-wrap flex-row  w-full text-white font-bold bg-[#48261c]">
          <li>
            <NavLink
              className="flex h-[100%] p-4"
              to="/Home"
              style={({ isActive }) => ({
                background: isActive ? "#e0242d" : "#48261c",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex h-[100%] p-4"
              to="/AddPuppy"
              style={({ isActive }) => ({
                background: isActive ? "#e0242d" : "#48261c",
              })}
            >
              Add Puppy
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex h-[100%] p-4"
              to="/RemovePuppy"
              style={({ isActive }) => ({
                background: isActive ? "#e0242d" : "#48261c",
              })}
            >
              Remove Puppy
            </NavLink>
          </li>

          <li>
            <a href="d" className="flex h-[100%] p-4">
              Filter
            </a>
          </li>
          <li>
            <a href="d" className="flex h-[100%] p-4">
              Favorite Puppies
            </a>
          </li>
        </ul>
        <div className="my-10 w-full">
          <Routes>
            <Route path="/Home" element={<Home puppies={puppies} />} />
            <Route path="/AddPuppy" element={<CreatePuppyView />} />
            <Route
              path="/RemovePuppy"
              element={<RemovePuppyView puppies={puppies} />}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
