import Card from '../Card';

import styles from './index.module.css';
import { Props } from './models';

const CardList = ({ cardsData }: Props) => {
  return (
    <ul
      className={styles.cards}
      role="cards-list"
    >
      {cardsData.map((data) => (
        <li key={data.id}>{<Card data={data} />}</li>
      ))}
    </ul>
  );
};
export default CardList;
