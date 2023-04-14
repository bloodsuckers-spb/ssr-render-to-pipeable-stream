import { FormCardData } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCardData) => void;
  confirm: () => void;
};
const fieldNames = [
  'FirstName',
  'LastName',
  'Gender',
  'Country',
  'BornDate',
] as const;

export type StringDataFields = {
  [key in (typeof fieldNames)[number]]: string;
};

export type FormFields = {
  PersonalData: boolean;
  ProfilePic: FileList;
} & StringDataFields;
