import { FormCard } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCard) => void;
};

export type ErrorsState = {
  [key: string]: boolean;
};

export type State = {
  isFormDataValid: boolean;
  errorsStatus: ErrorsState;
};
