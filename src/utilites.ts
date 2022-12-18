export const arrayCompare = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};

export const compare = (a: any, b: any) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
