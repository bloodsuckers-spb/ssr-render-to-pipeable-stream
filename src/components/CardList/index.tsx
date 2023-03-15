import Card from '../Card';

import styles from './index.module.css';
import { cardsData } from '../../constants';

const CardList = () => {
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
