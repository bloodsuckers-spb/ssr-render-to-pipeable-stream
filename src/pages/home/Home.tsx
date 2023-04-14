import { SearchBar, CardList } from './modules';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.content}>
      <SearchBar />
      <CardList />
    </div>
  );
};
