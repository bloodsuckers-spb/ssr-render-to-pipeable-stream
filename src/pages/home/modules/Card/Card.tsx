import { Props } from './Card.models';

import styles from './Card.module.scss';

export const Card = ({
  character: { name, image, gender, species, id },
  onCardClick,
}: Props) => (
  <div
    className={styles.card}
    onClick={() => onCardClick(id)}
    data-testid="card"
  >
    <img
      className={styles.image}
      src={image}
    />
    <h4>{name}</h4>
    <div>{gender}</div>
    <div>{species}</div>
  </div>
);
