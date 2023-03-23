export interface InputData {
  id: string;
  title: string;
  type: 'text' | 'checkbox' | 'radio' | 'date' | 'file';
  errorMessage: string;
}

export const inputsData: Array<InputData> = [
  {
    id: 'firstName',
    title: 'First Name',
    type: 'text',
    errorMessage: 'Invalid First Name',
  },
  {
    id: 'surname',
    title: 'Surname',
    type: 'text',
    errorMessage: 'Invalid Last Name',
  },
  {
    id: 'bornDate',
    title: 'Born date',
    type: 'date',
    errorMessage: 'Invalid Born date',
  },
  {
    id: 'profilePicture',
    title: 'Profile image',
    type: 'file',
    errorMessage: 'Please upload image',
  },
  {
    id: 'personalData',
    title: 'Confirm',
    type: 'checkbox',
    errorMessage: 'errorMessage',
  },
];
