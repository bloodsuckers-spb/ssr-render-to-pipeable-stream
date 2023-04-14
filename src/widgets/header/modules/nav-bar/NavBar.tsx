import { NavLink } from 'react-router-dom';

import { navlinks } from './constants';

import styles from './NavBar.module.scss';

export const NavBar = () => (
  <nav data-testid="nav">
    <ul className={styles.list}>
      {navlinks.map(({ url, text, id }) => (
        <li key={id}>
          <NavLink
            to={url}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

