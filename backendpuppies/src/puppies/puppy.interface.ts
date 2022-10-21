export interface BasePuppy {
  name: string;
  breed: string;
  description: string;
  image: string;
}

export interface Puppy extends BasePuppy {
  id: number;
}
