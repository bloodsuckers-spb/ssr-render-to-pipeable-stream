import styles from './index.module.scss';

import { Props } from './models';

export const CardWithInfo = ({
  cardData: { name, created, status, type, gender, species, image },
}: Props) => {
  return (
    <div
      className={styles.card}
      data-testid="card-with-info"
    >
      <div className="content">
        <img
          className={styles.image}
          src={image}
        />
        <h4>{name}</h4>
        <div>{created}</div>
        <div>{status}</div>
        <div>{type}</div>
        <div>{gender}</div>
        <div>{species}</div>
      </div>
    </div>
  );
};
