import React from "react";
import { FetchPuppies } from "./puppies/puppies.api";
import { Puppy } from "./puppies/puppy.interface";
import "./App.css";

function App() {
  FetchPuppies<Puppy[]>("http://localhost:7000/api/puppies/").then(
    (toDoItem) => {
      let myNewToDo: Puppy[] = toDoItem;
      console.log(myNewToDo);
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
