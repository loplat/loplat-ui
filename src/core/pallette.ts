import { green, red, yellow, blue } from './colors';

export const pallette = {
  success: green[300],
  danger: red[300],
  warning: yellow[300],
  info: blue[500],
  primaryLighter: blue[100],
  primaryLight: blue[300],
  primary: blue[500],
  primaryDark: blue[600],
} as const;
