import { AppHeader, AppMain, AppFooter, AppHeading } from '..';

import './index.css';

import { AppProps } from './models';

const App = ({ title, content }: AppProps) => {
  return (
    <div className="app">
      <AppHeader Heading={<AppHeading title={title} />} />
      <AppMain content={content} />
      <AppFooter />
    </div>
  );
};

export default App;
