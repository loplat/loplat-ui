import type { ComponentPropsWithoutRef, MutableRefObject, ReactNode } from 'react';
import React from 'react';

type Combine<T, K> = T & Omit<K, keyof T>;
type AccordionBase = {
  type?: 'fill' | 'line';
  /** 여닫는 transition css millisecond 입니다.  */
  duration?: number;
  /** 아코디언의 여닫음을 나타내는 상태입니다. */
  open?: boolean;
  /** 아코디언의 `open`상태를 조작할 수 있는 함수여야합니다. */
  onToggle?: (e: React.MouseEvent<HTMLElement>) => void;

  /** easing style default: ease */
  easing?: string;
  children: ReactNode;
};

export type AccordionProps = Combine<AccordionBase, ComponentPropsWithoutRef<'details'>>;
export type AccordionWrapperProps = Pick<Required<AccordionProps>, 'type' | 'duration' | 'easing'> &
  React.HtmlHTMLAttributes<HTMLDetailsElement>;

export type AccordionTitleProps = {
  /**
   * 페이지의 heading level에 맞게 작성해주세요.
   * 기본은 h3 입니다.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export type AccordionContextReturnType = {
  toggle: NonNullable<AccordionBase['onToggle']>;
  accordionRef: MutableRefObject<HTMLDetailsElement | null>;
  contentRef: MutableRefObject<HTMLDivElement | null>;
  iconRef: MutableRefObject<HTMLDivElement | null>;
  getAccordionTitleProps: () => Record<string, string | number>;
  getAccordionBodyProps: () => Record<string, string | number>;
  setIconAnimation: (keyframes: Keyframe[]) => void;
};
export type AccordionContextProviderProps = {
  children: JSX.Element;
} & Pick<Required<AccordionBase>, 'duration' | 'open' | 'easing'> &
  Pick<AccordionBase, 'onToggle'>;
export type AccordionIconProps = {
  // css animation keyframe을 최소 2개 배열이상으로 작성해주세요.
  keyframes?: Keyframe[];
  children: React.ReactChildren;
};
export type Keyframe = { [property: string]: string | number };
