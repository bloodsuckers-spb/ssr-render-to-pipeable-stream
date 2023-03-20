import { titles, isPath } from './constants';

const AppHeading = () => {
  const showTitle = () => {
    const { pathname } = window.location;
    return isPath(pathname) ? titles[pathname] : titles['*'];
  };

  return <div role="app-heading">{showTitle()}</div>;
};

export default AppHeading;
