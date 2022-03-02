import spacing from './spacing';
import borderless from './borderless';
import icon from './icon';
import eventHandler from './eventHandler';
import typography from './typography';
import spinner from './spinner';
import hideCanvas from './hideCanvas';

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

export { spacing, borderless, icon, eventHandler, typography, spinner, hideCanvas };
