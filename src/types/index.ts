export type Empty = Record<string, never>;

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
