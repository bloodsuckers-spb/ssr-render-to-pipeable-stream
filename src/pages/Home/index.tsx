import { CardList, SearchBar } from './components';

import styles from './index.module.scss';

import { cardsData } from './constants';

const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <CardList cardsData={cardsData} />
  </div>
);

export default Home;
