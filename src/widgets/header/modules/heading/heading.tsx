import { titles, isPath } from './constants';
import { useLocation } from 'react-router-dom';

export const Heading = () => {
  const { pathname } = useLocation();
  return (
    <div data-testid="heading">
      {isPath(pathname) ? titles[pathname] : titles['*']}
    </div>
  );
};
