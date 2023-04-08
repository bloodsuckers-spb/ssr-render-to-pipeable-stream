import { Props } from './models';

import styles from './index.module.scss';

export const Card = ({
  character: { name, image, gender, species },
}: Props) => (
  <li
    className={styles.card}
    data-testid="card"
  >
    <img
      className={styles.image}
      src={image}
    />
    <h4>{name}</h4>
    <div>{gender}</div>
    <div>{species}</div>
  </li>
);
