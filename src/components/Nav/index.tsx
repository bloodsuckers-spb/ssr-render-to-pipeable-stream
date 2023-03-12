import { NavLink } from 'react-router-dom';

import { navlinks } from '../../constants';

import styles from './index.module.css';

const Nav = () => (
  <nav>
    <ul className={styles.list}>
      {navlinks.map(({ url, text, id }) => (
        <li key={id}>
          <NavLink to={url}>{text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
