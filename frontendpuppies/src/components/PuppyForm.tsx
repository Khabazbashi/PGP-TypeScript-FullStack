import React, { ChangeEvent, FormEvent, useState } from "react";
import { IBasePuppy } from "../interfaces/puppy.interface";

interface FormProps {
  onCreate: (postRequest: IBasePuppy) => void;
}

const PuppyForm = ({ onCreate }: FormProps) => {
  const [postRequest, setPostRequest] = useState<IBasePuppy>({
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
    onCreate(postRequest);
  };

  return (
    <form
      id="usrform"
      onSubmit={handleSubmit}
      className="flex flex-col w-[90%] md:w-[50%]"
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
        ImageURL
      </label>
      <input
        className="p-2 mb-16 "
        name="image"
        type="text"
        onChange={handleChange}
      ></input>
      <button className="rounded-full py-3 px-6 bg-[#FF4500] m-auto text-xl tracking-widest	 ">
        SUBMIT
      </button>
    </form>
  );
};

export default PuppyForm;
