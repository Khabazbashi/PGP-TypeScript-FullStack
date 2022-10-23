import React, { FormEvent, ChangeEvent, useEffect, useState } from "react";
import { CreatePuppy, FetchPuppies } from "../puppies.api";
import { RequestPuppy } from "../interfaces/puppy.interface";

const AddPuppy = () => {
  const [postRequest, setPostRequest] = useState<RequestPuppy>({
    name: "",
    breed: "",
    description: "",
    image: "",
  });

  const handleChange = (event: ChangeEvent) => {
    setPostRequest({
      ...postRequest,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    console.log("under created", postRequest);

    CreatePuppy<RequestPuppy>(
      "http://localhost:7000/api/puppies/",
      postRequest
    );
  };

  return (
    <div>
      <h1 className="text-3xl my-10">Add a new puppy</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          className="p-2 mb-7"
          name="name"
          type="text"
          onChange={handleChange}
        ></input>
        <label htmlFor="breed">Breed;</label>
        <input
          className="p-2 mb-7"
          name="breed"
          type="text"
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          className="p-2 mb-7"
          name="description"
          type="text"
          onChange={handleChange}
        ></input>
        <label htmlFor="image">ImageURL: </label>
        <input
          className="p-2 mb-7 "
          name="image"
          type="text"
          onChange={handleChange}
        ></input>
        <button className="rounded-full p-2 bg-orange-600">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddPuppy;
