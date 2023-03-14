export type Empty = Record<string, never>;

export type AppRoutes = Array<{
  id: number;
  path: string;
  title: string;
  content: JSX.Element;
}>;
