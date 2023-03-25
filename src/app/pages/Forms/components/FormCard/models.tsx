export const formCardKeys = [
  'FirstName',
  'LastName',
  'BornDate',
  'ProfilePic',
  'Country',
  'Gender',
  'PersonalData',
] as const

export type FormCard = {
  [key in (typeof formCardKeys)[number]]: key extends 'PersonalData' ? boolean : string;
};
