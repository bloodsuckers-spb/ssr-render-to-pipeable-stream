export interface InputData {
  id: string;
  title: string;
  type: 'text' | 'checkbox' | 'radio' | 'date' | 'file';
  errorMessage: string;
}

export const inputsData: Array<InputData> = [
  {
    id: 'first-name',
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
    id: 'born-date',
    title: 'Born date',
    type: 'date',
    errorMessage: 'errorMessage',
  },
  {
    id: 'profile-picture',
    title: 'Profile image',
    type: 'file',
    errorMessage: 'errorMessage',
  },
  {
    id: 'personal-data',
    title: 'Confirm',
    type: 'checkbox',
    errorMessage: 'errorMessage',
  },
];

export const countries = ['USA', 'Italy', 'Germany'];

export const radioValues = ['Male', 'Female'] as const;
