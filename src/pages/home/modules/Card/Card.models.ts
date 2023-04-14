import { Character } from "app/types/API";

export type Props = {
  character: Character;
  onCardClick: (id: number) => void;
};
