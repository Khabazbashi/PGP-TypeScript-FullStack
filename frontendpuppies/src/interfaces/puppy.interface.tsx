export interface IBasePuppy {
  name: string;
  breed: string;
  description: string;
  image: string;
}

export interface IPuppy extends IBasePuppy {
  id: number;
}
