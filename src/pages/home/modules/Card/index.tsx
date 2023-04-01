import { Props } from './models';

import styles from './index.module.scss';

export const Card = ({ data: { name, description, imgUrl, breed } }: Props) => (
  <li
    className={styles.card}
    data-testid="card"
  >
    <img
      className={styles.image}
      src={imgUrl}
    />
    <h4>{name}</h4>
    <p className={styles.paragraph}>{breed}</p>
    <p>{description}</p>
  </li>
);
