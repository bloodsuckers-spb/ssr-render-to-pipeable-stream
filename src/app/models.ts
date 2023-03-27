import { ReactNode } from 'react';

export type Paths = '/' | '*' | '/about-us' | '/forms';

export type AppRoutes = Array<{
  id: string;
  path: Paths;
  content: ReactNode;
}>;
