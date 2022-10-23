export interface RequestPuppy {
  name: string;
  breed: string;
  description: string;
  image: string;
}

export interface Puppy extends RequestPuppy {
  id: number;
}
