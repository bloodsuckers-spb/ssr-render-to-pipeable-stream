import { CardList, SearchBar } from './modules';

import styles from './index.module.scss';

import { cardsData } from './constants';

const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <CardList cardsData={cardsData} />
  </div>
);

export default Home;