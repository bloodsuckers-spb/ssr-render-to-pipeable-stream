import { FormCardData } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCardData) => void;
};

export const RefsMap = {
  FirstName: 'FirstName',
  LastName: 'LastName',
  BornDate: 'BornDate',
  ProfileImage: 'ProfileImage',
  PersonalData: 'PersonalData',
} as const;

export const errorsKeys = [
  'isFirstNameValid',
  'isLastNameValid',
  'isBornDateValid',
  'isProfilePicValid',
  'isCountryChecked',
  'isGenderChecked',
  'isPersonalDataConfirm',
] as const;

export type ErrorsState = {
  [key in (typeof errorsKeys)[number]]: boolean;
};

export type State = {
  isFormDataValid: boolean;
  isCardAdded: boolean;
  errorsStatus: ErrorsState;
};
