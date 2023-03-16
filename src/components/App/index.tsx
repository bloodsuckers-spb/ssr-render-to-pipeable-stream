import { AppHeader, AppMain, AppFooter, AppHeading } from '..';

import './index.css';

import { AppProps } from './models';

const App = ({ title, children }: AppProps) => {
  return (
    <div className="app">
      <AppHeader><AppHeading title={title} /></AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  );
};

export default App;
