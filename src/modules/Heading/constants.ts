import { Paths } from "../../app/AppRouter/models"

export const titles: Record<Paths, string> = {
  '/': 'Home',
  '*': 'Not Found',
  '/about-us': 'About Us',
  '/forms': 'Forms',
} as const;

export const isPath = (path: string | Paths): path is Paths => path in titles;
