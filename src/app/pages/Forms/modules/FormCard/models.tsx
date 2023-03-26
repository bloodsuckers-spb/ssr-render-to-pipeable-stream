export const formCardKeys = [
  'FirstName',
  'LastName',
  'BornDate',
  'ProfilePic',
  'Country',
  'Gender',
  'PersonalData',
] as const

export type FormCardData = {
  [key in (typeof formCardKeys)[number]]: key extends 'PersonalData' ? boolean : string;
};

export type Props = {
  data: FormCardData;
};