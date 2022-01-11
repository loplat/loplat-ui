import {
  background100,
  black400,
  blue100,
  blue300,
  blue500,
  danger100,
  danger300,
  grayScale200,
  grayScale500,
  success100,
  success300,
  warning100,
  warning300,
} from '../../../core/Palette';
import { ToastType, ColorSet } from './types';

export function generateColorSet(type: ToastType): ColorSet {
  if (type === 'success')
    return {
      borderColor: success300,
      backgroundColor: success100,
      textColor: success300,
      iconColor: success300,
    };
  if (type === 'info')
    return {
      borderColor: blue300,
      backgroundColor: blue100,
      textColor: blue500,
      iconColor: blue500,
    };
  if (type === 'danger')
    return {
      borderColor: danger300,
      backgroundColor: danger100,
      textColor: danger300,
      iconColor: danger300,
    };
  if (type === 'warning')
    return {
      borderColor: warning300,
      backgroundColor: warning100,
      textColor: warning300,
      iconColor: warning300,
    };
  return {
    borderColor: grayScale200,
    backgroundColor: background100,
    textColor: black400,
    iconColor: grayScale500,
  };
}

export function generateUniqueId(): string {
  return '_' + String(Math.random().toString(36).slice(2, 11));
}
