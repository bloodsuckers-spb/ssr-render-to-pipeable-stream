export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const CardDataKeys = [
  'id',
  'name',
  'imgUrl',
  'breed',
  'description',
] as const;

export type CardData = {
  [key in (typeof CardDataKeys)[number]]: string;
};
