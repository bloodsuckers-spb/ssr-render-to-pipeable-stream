import { NavLink } from 'react-router-dom';

import { navlinks } from '../../constants';

const Nav = () => (
  <nav>
    <ul>
      {navlinks.map(({ url, text, id }) => (
        <li key={id}>
          <NavLink to={url}>{text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
