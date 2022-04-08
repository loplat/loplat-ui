export * from './spacing';
export * from './borderless';
export * from './disabled';
export * from './icon';
export * from './eventHandler';
export * from './typography';
export * from './hideCanvas';
export * from './button';
export * from './generateTable';

export const pickPropsInObj = (obj: { [k: string]: unknown }, ...props: string[]): unknown => {
  const result: Record<string, unknown> = {};

  for (const key in obj) {
    for (const prop of props) {
      if (key === prop) {
        result[key] = obj[key];
      }
    }
  }
  return result;
};
