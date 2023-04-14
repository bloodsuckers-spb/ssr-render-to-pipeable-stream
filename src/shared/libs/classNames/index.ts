/* eslint-disable @typescript-eslint/no-unused-vars */

export const classNames = (
  cls: string,
  mods: Record<string, boolean | string> = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
