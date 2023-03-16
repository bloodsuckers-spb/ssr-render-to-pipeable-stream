import { AppProps } from '../App/models';

type MyPick<Type, Key extends keyof Type> = {
  [specificKey in Key]: Type[Key];
};

export type Props = MyPick<AppProps, 'title'>;
