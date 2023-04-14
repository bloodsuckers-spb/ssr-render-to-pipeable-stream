import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../config/store'

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={setupStore()}>{children}</Provider>;
};
