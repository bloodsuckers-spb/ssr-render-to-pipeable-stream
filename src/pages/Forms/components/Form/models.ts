import { FormCard } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCard) => void;
};

export type ErrorsStatus = {
  [key: string]: boolean;
};

export type State = {
  isInvalid: boolean;
  errorsStatus: ErrorsStatus;
};
