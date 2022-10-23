import React, { FormEvent, ChangeEvent, useState } from "react";
import { CreatePuppy } from "../puppies.api";
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
    event.preventDefault();
    CreatePuppy<RequestPuppy>(
      "http://localhost:7000/api/puppies/",
      postRequest
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-20 mb-10 font-mono">Add a new puppy</h1>
      <form
        id="usrform"
        onSubmit={handleSubmit}
        className="flex flex-col w-[50%]"
      >
        <label className="pb-2" htmlFor="name">
          Name
        </label>
        <input
          className="p-2 mb-7"
          name="name"
          type="text"
          onChange={handleChange}
        ></input>
        <label className="pb-2" htmlFor="breed">
          Breed
        </label>
        <input
          className="p-2 mb-7"
          name="breed"
          type="text"
          onChange={handleChange}
        ></input>
        <label className="pb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="p-2 mb-7"
          name="description"
          form="usrform"
          onChange={handleChange}
        ></textarea>
        <label className="pb-2" htmlFor="image">
          ImageURL{" "}
        </label>
        <input
          className="p-2 mb-16 "
          name="image"
          type="text"
          onChange={handleChange}
        ></input>
        <button className="rounded-full py-2 px-6 bg-[#FF4500] m-auto text-xl tracking-widest	 ">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddPuppy;
