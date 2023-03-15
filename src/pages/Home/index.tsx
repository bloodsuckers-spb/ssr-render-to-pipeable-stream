import { SearchBar, CardList } from '../../components';

import styles from './index.module.css';

import { cardsData } from '../../constants';

const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <CardList cardsData={cardsData} />
  </div>
);

export default Home;
