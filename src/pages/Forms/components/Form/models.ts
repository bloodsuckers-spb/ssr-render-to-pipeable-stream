import { FormCard } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCard) => void;
};

export type Errors = {
  id: string;
  status: boolean;
};

export type State = {
  isInvalid: boolean;
  errors: Array<Errors>;
};
