import { ColorSet, ToastType } from './types';
import { danger, success, warning } from '../../../core/styles/palette';
import {
  black,
  yellow100,
  grayscale200,
  grayscale500,
  green100,
  grayscale50,
  blue100,
  blue300,
  blue500,
  red100,
} from '../../../core/colors';

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
      borderColor: success,
      backgroundColor: green100,
      textColor: success,
      iconColor: success,
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
      borderColor: danger,
      backgroundColor: red100,
      textColor: danger,
      iconColor: danger,
    };
  if (type === 'warning')
    return {
      borderColor: warning,
      backgroundColor: yellow100,
      textColor: warning,
      iconColor: warning,
    };
  return {
    borderColor: grayscale200,
    backgroundColor: grayscale50,
    textColor: black,
    iconColor: grayscale500,
  };
};
