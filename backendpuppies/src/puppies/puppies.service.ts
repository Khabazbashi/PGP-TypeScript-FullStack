// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

import { BasePuppy, Puppy } from "./puppy.interface";
import { Puppies } from "./puppies.interface";

/**
 * In-Memory Store
 */
let puppies: Puppies = {
  1: {
    id: 1,
    name: "Billy",
    breed: "Dobermann",
    description:
      "Dobermans are very intelligent, learn easily, respond quickly, and make loving and fun companions. ",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: 2,
    name: "Lucy",
    breed: "Golden Retriever",
    description:
      "Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers. ",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea",
    breed: "Chihuahua",
    description:
      "Chihuahuas are loyal, friendly and good family pets when treated respectfully. They can get all the exercise needed in the house or apartment.",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};
/**
 * Service Methods
 */
export const findAll = async (): Promise<Puppy[]> => Object.values(puppies);

export const find = async (id: number): Promise<Puppy> => puppies[id];

export const create = async (newPuppy: BasePuppy): Promise<Puppy> => {
  const id = new Date().valueOf();

  puppies[id] = {
    id,
    ...newPuppy,
  };

  return puppies[id];
};

export const update = async (
  id: number,
  itemUpdate: BasePuppy
): Promise<Puppy | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  puppies[id] = { id, ...itemUpdate };

  return puppies[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const puppy = await find(id);

  if (!puppy) {
    return null;
  }

  delete puppies[id];
};
