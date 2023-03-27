import { Header, Footer } from '../../widgets';

import styles from './index.module.scss';

import { Props } from './models';

const { app, bounding, inner } = styles;

const Layout = ({ children }: Props) => (
  <div
    className={app}
    data-testid="app"
  >
    <Header />
    <main>
      <div className={bounding}>
        <div className={inner}>{children}</div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
