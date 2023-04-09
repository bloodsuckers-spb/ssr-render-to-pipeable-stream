import { Props } from './models';

import styles from './index.module.scss';

export const Card = ({
  character: { name, image, gender, species, id },
  onCardClick,
}: Props) => {
  const onClick = () => onCardClick(id);

  return (
    <div
      className={styles.card}
      onClick={onClick}
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
};
