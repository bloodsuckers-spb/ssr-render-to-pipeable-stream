import { NavLink } from 'react-router-dom';

import { navlinks } from '../../constants';

import styles from './index.module.css';

const AppNav = () => {
  const getPathname = (url: string) => {
    if (url === '/') return false;
    return window.location.pathname.match(url);
  };
  return (
    <nav role="navigation">
      <ul className={styles.list}>
        {navlinks.map(({ url, text, id }) => (
          <li key={id}>
            <NavLink
              to={!getPathname(url) ? url : ''}
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
};

export default AppNav;
