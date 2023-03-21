import { FormCard } from '../FormCard/models';

export type Props = {
  addCard: (card: FormCard) => void;
};

export type State = {
  isDisabled: boolean;
  isInvalid: boolean;
};
