import { FormCard } from './components/FormCard/models';

export type Props = {
  addCard: (card: FormCard) => void;
};

export type State = {
  isDisabled: boolean;
  isInvalid: boolean;
};
