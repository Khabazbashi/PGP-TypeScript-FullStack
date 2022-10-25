import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreatePuppy, FetchPuppies, RemovePuppy } from "./puppies.api";
import { IPuppy, IBasePuppy } from "./interfaces/puppy.interface";
import Home from "./pages/homePage";
import PostPage from "./pages/postPage";
import DeletePage from "./pages/deletePage";
import Navbar from "./components/Navbar";

function App() {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    FetchPuppies<IPuppy[]>("http://localhost:7000/api/puppies/").then(
      (puppies) => {
        setPuppies(puppies);
      }
    );
  }, [onDelete, onCreate]);

  function onDelete(id: number) {
    return RemovePuppy("http://localhost:7000/api/puppies/" + id);
  }

  function onCreate(postRequest: IBasePuppy) {
    return CreatePuppy<IBasePuppy>(
      "http://localhost:7000/api/puppies/",
      postRequest
    );
  }

  return (
    <Router>
      <div className="App flex flex-col min-h-screen w-full bg-[#d9e3e0] items-center p-10 border-[20px] border-[#48261c]">
        <h1 className="font-mono text-center text-4xl py-10 md:text-6xl md:pt-56 md:pb-10">
          Happy Dogs
        </h1>
        <Navbar />
        <div className="my-10 w-full">
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
