import { Character } from '../../models';

export type Props = {
  character: Character;
  onCardClick: (id: number) => void;
};
