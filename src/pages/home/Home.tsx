import { SearchBar, CardList } from './modules';

import styles from './Home.module.scss';

export const Home = () => (
  <div className={styles.content}>
    <SearchBar />
    <CardList />
  </div>
);
