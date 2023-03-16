import { Title } from '../../models';

export type AppRoutes = Array<{
  id: number;
  path: string;
  title: Title;
  content: JSX.Element;
}>;
