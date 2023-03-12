import { NavLink } from 'react-router-dom';

import { navlinks } from '../../constants';

import styles from './index.module.css';

import { Props } from './models';

const Nav = ({ changeCurrentPage }: Props) => {
  return (
    <nav>
      <ul className={styles.list}>
        {navlinks.map(({ url, text, id }) => (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              onClick={() => changeCurrentPage(text)}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
