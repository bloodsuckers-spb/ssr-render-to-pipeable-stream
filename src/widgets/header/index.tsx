import { Heading, AppNav } from './modules';

import styles from './index.module.scss';

const { header, bounding, inner } = styles;

export const Header = () => (
  <header className={header}>
    <div className={bounding}>
      <div className={inner}>
        <Heading />
        <AppNav />
      </div>
    </div>
  </header>
);
