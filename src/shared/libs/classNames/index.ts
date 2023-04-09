/* eslint-disable @typescript-eslint/no-unused-vars */

export const classNames = (
  cls: string,
  mods: Record<string, boolean | string>,
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
