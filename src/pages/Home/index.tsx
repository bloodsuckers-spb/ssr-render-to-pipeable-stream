import { SearchBar, Card } from '../../components';

import { cardsData } from '../../constants';

import styles from './index.module.css';

const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <ul
      className={styles.cards}
      role="cards-list"
    >
      {cardsData.map((data) => (
        <li key={data.id}>{<Card data={data} />}</li>
      ))}
    </ul>
  </div>
);

export default Home;
