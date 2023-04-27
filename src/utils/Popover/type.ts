import type { ReactNode, RefObject } from 'react';

type PositionType = { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
export type PopoverContextType = {
  container: Element | null;
  triggerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  triggerType?: 'hover' | 'click';
  isOpen: boolean;
};
export type PopoverTypes = {
  children: ReactNode;
  disabled: boolean;
  position: { anchor: PositionType; transform: PositionType };
  triggerType?: PopoverContextType['triggerType'];
  offset?: number;
  duration?: number;
};
export type PopoverContentType = {
  children: ReactNode;
};
export type PopoverTriggerType = {
  children: (isOpen: boolean) => ReactNode;
};
