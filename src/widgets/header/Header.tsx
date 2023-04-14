import { Heading, NavBar } from './modules';

import styles from './Header.module.scss';

const { header, bounding, inner } = styles;

export const Header = () => (
  <header className={header}>
    <div className={bounding}>
      <div className={inner}>
        <Heading />
        <NavBar />
      </div>
    </div>
  </header>
);
