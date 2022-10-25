import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreatePuppy, FetchPuppies, RemovePuppy } from "./puppies.api";
import { IPuppy, IBasePuppy } from "./interfaces/puppy.interface";
import Home from "./pages/homePage";
import PostPage from "./pages/postPage";
import DeletePage from "./pages/deletePage";
import Navbar from "./components/Navbar";

function App() {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  const onDelete = useCallback((id: number) => {
    RemovePuppy("http://localhost:7000/api/puppies/" + id);
  }, []);

  const onCreate = useCallback((postRequest: IBasePuppy) => {
    CreatePuppy<IBasePuppy>("http://localhost:7000/api/puppies/", postRequest);
  }, []);

  useEffect(() => {
    FetchPuppies<IPuppy[]>("http://localhost:7000/api/puppies/").then(
      (puppies) => {
        setPuppies(puppies);
      }
    );
  }, [puppies]);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen w-full bg-[#d9e3e0] items-center md:p-10 border-[20px] border-[#48261c]">
        <h1 className="font-mono text-center text-4xl py-20 md:text-6xl md:pt-56 md:pb-10">
          Happy Dogs
        </h1>
        <Navbar />
        <div className="my-10 w-full max-w-[100em]">
          <Routes>
            <Route path="/" element={<Home puppies={puppies} />} />
            <Route
              path="/addpuppy"
              element={<PostPage onCreate={onCreate} />}
            />
            <Route
              path="/removepuppy"
              element={<DeletePage puppies={puppies} onDelete={onDelete} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
