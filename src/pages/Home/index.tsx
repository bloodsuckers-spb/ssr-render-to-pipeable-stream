import { SearchBar, CardList } from '../../components';

import styles from './index.module.css';

const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <CardList />
  </div>
);

export default Home;
