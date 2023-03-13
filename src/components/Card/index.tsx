import { Props } from './models';

import styles from './index.module.css';

const Card = ({ data: { name, description, imgUrl, breed } }: Props) => (
  <div
    className={styles.card}
    role="card"
  >
    <img
      className={styles.image}
      src={imgUrl}
    />
    <h4>{name}</h4>
    <p className={styles.paragraph}>{breed}</p>
    <p>{description}</p>
  </div>
);

export default Card;
