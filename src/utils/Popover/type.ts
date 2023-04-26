import type { ReactNode, RefObject } from 'react';

type PositionType = { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
export type PopoverContextType = {
  container: Element | null;
  triggerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  disabled: boolean;
  position?: { anchor: PositionType; portal: PositionType };
  triggerType?: 'hover' | 'click';
  offset?: number;
  isOpen: boolean;
};
export type PopoverTypes = {
  children: ReactNode;
  disabled: boolean;
  position?: PopoverContextType['position'];
  triggerType?: PopoverContextType['triggerType'];
  offset?: PopoverContextType['offset'];
};
export type PopoverContentType = {
  children: ReactNode;
};
export type PopoverTriggerType = {
  children: (isOpen: boolean) => ReactNode;
};
