export interface FormInput {
  id: string;
  title: string;
  inputType: 'text' | 'checkbox' | 'radio' | 'date';
  errorMessage: string;
}

export const InputsData: Array<FormInput> = [
  {
    id: 'firstName',
    title: 'First Name',
    inputType: 'text',
    errorMessage: 'errorMessage',
  },
  {
    id: 'sureName',
    title: 'Surname Name',
    inputType: 'text',
    errorMessage: 'errorMessage',
  },
  {
    id: 'born-date',
    title: 'Born date',
    inputType: 'date',
    errorMessage: 'errorMessage',
  },
  {
    id: 'personal-data',
    title: 'Confirm',
    inputType: 'checkbox',
    errorMessage: 'errorMessage',
  },
];

export const countries = ['USA', 'Italy', 'Germany'];
