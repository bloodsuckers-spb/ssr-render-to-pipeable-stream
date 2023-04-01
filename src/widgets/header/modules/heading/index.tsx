import { titles, isPath } from './constants';
import { useLocation } from 'react-router-dom';

const Heading = () => {
  const { pathname } = useLocation();
  return (
    <div data-testid="heading">
      {isPath(pathname) ? titles[pathname] : titles['*']}
    </div>
  );
};

export default Heading;
