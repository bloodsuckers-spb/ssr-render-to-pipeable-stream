import { titles } from './routes';

export type Title = keyof typeof titles;

export type AppRoutes = Array<{
  id: number;
  path: string;
  title: Title;
  content: JSX.Element;
}>;
