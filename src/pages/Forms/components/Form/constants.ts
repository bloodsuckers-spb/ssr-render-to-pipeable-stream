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
    errorMessage: 'errorMessage',
  },
  {
    id: 'surname',
    title: 'Surname',
    type: 'text',
    errorMessage: 'errorMessage',
  },
  {
    id: 'bornDate',
    title: 'Born date',
    type: 'date',
    errorMessage: 'errorMessage',
  },
  {
    id: 'profilePicture',
    title: 'Profile image',
    type: 'file',
    errorMessage: 'errorMessage',
  },
  {
    id: 'personalData',
    title: 'Confirm',
    type: 'checkbox',
    errorMessage: 'errorMessage',
  },
];

export const countries = ['USA', 'Italy', 'Germany'];

export const radioValues = ['Male', 'Female'] as const;
