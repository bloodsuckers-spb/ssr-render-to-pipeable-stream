import Card from '../Card';

import styles from './index.module.scss';
import { Props } from './models';

const CardList = ({ cardsData }: Props) => {
  return (
    <ul
      className={styles.cards}
      role="cards-list"
    >
      {cardsData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </ul>
  );
};
export default CardList;
