import { createContext, useState, useRef, useContext, useMemo } from 'react';
import { PopoverContentType, PopoverContextType, PopoverTriggerType, PopoverTypes } from './type';
import { generateUniqueId } from '../../functions/uniqueId';
import { Portal } from '..';
import { useClick, useHover, useKeyDown, usePopoverPosition } from './hooks';

export const DEFAULT_POSITION: PopoverContextType['position'] = {
  anchor: { vertical: 'top', horizontal: 'right' },
  portal: { vertical: 'top', horizontal: 'left' },
};
const PopoverContext = createContext<PopoverContextType | undefined>(undefined);
export const Popover = ({
  children,
  disabled,
  position = DEFAULT_POSITION,
  triggerType = 'hover',
  offset = 0,
}: PopoverTypes) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // portal
  const [container, setContainer] = useState<PopoverContextType['container']>(null);
  const uniqueId = useMemo(() => generateUniqueId(), []);
  const isOpen = container !== null;

  const open = () => {
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const close = () => {
    const targetContainer = document.getElementById(uniqueId);
    targetContainer?.remove();
    setContainer(null);
  };
  const toggle = () => {
    isOpen ? close() : open();
  };

  useClick({ triggerType, triggerRef, contentRef, isOpen, close, toggle, disabled });
  useHover({ triggerType, triggerRef, contentRef, isOpen, close, toggle, disabled });
  useKeyDown({ triggerRef, contentRef, close, toggle, disabled });
  usePopoverPosition({ container, triggerRef, contentRef, position, offset });

  return (
    <PopoverContext.Provider value={{ disabled, container, triggerRef, contentRef, position, isOpen }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = (): PopoverContextType => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('The sub-components of the Popover component must be used within a Popover component.');

  return context;
};

Popover.Trigger = function PopoverTrigger({ children }: PopoverTriggerType) {
  const { isOpen, triggerRef } = usePopover();
  return (
    <div tabIndex={0} ref={triggerRef} style={{ display: 'flex', width: 'fit-content' }}>
      {children(isOpen)}
    </div>
  );
};

Popover.Content = function PopoverContent({ children }: PopoverContentType) {
  const { container, contentRef } = usePopover();
  return (
    <Portal container={container}>
      <div ref={contentRef} style={{ display: 'flex', position: 'absolute' }}>
        {children}
      </div>
    </Portal>
  );
};

// optional 시간남을 때 작성하기
Popover.Arrow = function PopoverArrow() {
  return <div>Arrow</div>;
};
