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
    id: 1666559447124,
    name: "Adriana",
    breed: "Terrier",
    description:
      "Adriana is a friendly girl who loves dogs and humans of all ages and sizes! She is really laid back as long as there are cuddles involved. ",
    image:
      "https://www.akc.org/wp-content/uploads/2020/07/Yorkshire-Terrier-puppy-in-a-dog-bed.20200601164413905-500x486.jpg",
  },
  2: {
    id: 1666559447125,
    name: "Alex",
    breed: "Golden Retriever",
    description: "Alex is a super affectionate boy and loves cuddles! ",
    image:
      "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/4f509146-8d70-4f84-9e52-197df4279616/82.jpg",
  },
  3: {
    id: 1666559447126,
    name: "Tea",
    breed: "Chihuahua",
    description:
      "Tea is such a handsome boy. He loves to be pampered, spoiled and loved forever and ever.",
    image:
      "https://www.mediastorehouse.co.uk/p/172/long-haired-chihuahua-puppy-outdoors-15301018.jpg.webp",
  },
  4: {
    id: 1666559447127,
    name: "Boris",
    breed: "Shepherd",
    description:
      "Meet Boris, this fun loving, speedy boy. He loves nothing more than being able to run at top speed, and playing with toys. Equally does love a good fuss on his terms.",
    image:
      "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDcyMTY0NTk1NTQxNDQ5/german-shepherd-puppy-guide.jpg",
  },
  5: {
    id: 1666559447128,
    name: "Loki",
    breed: "Husky",
    description:
      "Loki is an exuberant and active dog who loves to play with his toys, especially tennis balls. He enjoys long walks in green, open spaces where he can sniff and explore his surroundings. ",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/10/07143440/Siberian-Husky-puppy-running-in-the-grass.jpg",
  },
  6: {
    id: 1666559447129,
    name: "Gary",
    breed: "Lurcher",
    description:
      "Gary is a lovely dog who is full of energy and loves to run around. ",
    image:
      "https://www.burgesspetcare.com/wp-content/uploads/2020/09/greyhound-lurcher.jpg",
  },
  7: {
    id: 1666559447130,
    name: "Brian",
    breed: "Lurcher",
    description:
      "Brian is a gentle, happy character who loves being with people. Brian loves food and treats are a good way to carry on his training.  ",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/lurcher-puppy-lynne-iddon.jpg",
  },
  8: {
    id: 1666559447131,
    name: "Twinkle",
    breed: "Bulldog",
    description:
      "Twinkle loves nothing more than chilling in the back of reception all day supervising our work!",
    image: "https://i.ytimg.com/vi/tPaJ8lSFap8/maxresdefault.jpg",
  },
  9: {
    id: 1666559447132,
    name: "Lily",
    breed: "Cocker Spaniel",
    description:
      "Lily is friendly with people and enjoys a short fuss but she's far too busy to sit still for long. She particularly likes games with tennis balls. ",
    image:
      "https://www.pdsa.org.uk/media/8271/cocker-spaniel-outdoors-gallery-8-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132204646480000000",
  },
  10: {
    id: 1666559447133,
    name: "Nacho",
    breed: "Mongrel",
    description:
      "Nacho is playful and will often keep himself amused with toys. He likes going out for exercise and exploring the environment. ",
    image:
      "https://a-z-animals.com/media/2019/11/shutterstock_1763516603-1024x535.jpg",
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
