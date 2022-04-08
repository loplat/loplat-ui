import spacing from './spacing';
import borderless from './borderless';
import disabled from './disabled';
import icon from './icon';
import eventHandler from './eventHandler';
import typography from './typography';
import hideCanvas from './hideCanvas';
import button from './button';
import generateTable from './generateTable';

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

export { spacing, borderless, disabled, icon, eventHandler, typography, hideCanvas, button, generateTable };
