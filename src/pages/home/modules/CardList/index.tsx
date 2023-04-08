import { Card } from '../Card';

import styles from './index.module.scss';

import { Props } from './models';

export const CardList = ({ characters }: Props) => {
  return (
    <ul
      className={styles.cards}
      data-testid="cards-list"
    >
      {characters.length
        ? 'Sorry, There is nothing found'
        : characters.map((data) => (
            <Card
              key={data.id}
              data={data}
            />
          ))}
    </ul>
  );
};
