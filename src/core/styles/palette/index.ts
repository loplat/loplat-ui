import { green, red, yellow, blue } from '../../colors';

export const success = green[300];
export const danger = red[300];
export const warning = yellow[300];
export const info = blue[500];
export const primaryLighter = blue[100];
export const primaryLight = blue[300];
export const primary = blue[500];
export const primaryDark = blue[600];

export const palette = {
  success: green[300],
  danger: red[300],
  warning: yellow[300],
  info: blue[500],
  primaryLighter: blue[100],
  primaryLight: blue[300],
  primary: blue[500],
  primaryDark: blue[600],
} as const;
