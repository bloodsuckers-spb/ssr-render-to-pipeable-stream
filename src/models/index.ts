import { titles } from '../components/AppRouter/routes';

export type Title = keyof typeof titles;

export type Empty = Record<string, never>;
