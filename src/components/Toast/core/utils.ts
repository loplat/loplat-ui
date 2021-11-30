import { ColorSet, ToastType } from './types';
import {
  background100,
  black500,
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

export const generateId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const createRectRef = (onRect: (rect: DOMRect) => void) => (el: HTMLElement | null) => {
  if (el) {
    setTimeout(() => {
      const boundingRect = el.getBoundingClientRect();
      onRect(boundingRect);
    });
  }
};

export const prefersReducedMotion = (() => {
  // Cache result
  let shouldReduceMotion: boolean | undefined = undefined;

  return () => {
    if (shouldReduceMotion === undefined && typeof window !== 'undefined') {
      const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();

export const generateColorSet = (type: ToastType): ColorSet => {
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
    textColor: black500,
    iconColor: grayScale500,
  };
};
