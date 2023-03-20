import { titles, isPath } from './constants';

const Heading = () => (
  <div data-testid="heading">
    {isPath(location.pathname) ? titles[location.pathname] : titles['*']}
  </div>
);

export default Heading;
