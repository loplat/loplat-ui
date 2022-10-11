/* eslint-disable react-hooks/rules-of-hooks */
import React, { ForwardedRef, useContext, useMemo, useRef, useState } from 'react';
import { Portal } from '../../utils';
import { ChevronDownIcon } from '../../assets/Icon';
import {
  DefaultDropdownValue,
  DropdownBarProps,
  DropdownProps,
  DropdownTypes,
  OptionListProps,
  OptionProps,
} from './types';
import { Bar, OptionList, Option } from './styles';
import { generateUniqueId } from '../../functions/uniqueId';
import { useClick, useKeyDown, useOptionListPosition } from './hooks';
import { popperZIndex } from '../../core';

const DropdownContext = React.createContext<
  Pick<
    DropdownTypes<never>,
    'container' | 'triggerRef' | 'optionListRef' | 'expanded' | 'disabled' | 'close' | 'onChange'
  >
>({
  container: null,
  triggerRef: null,
  optionListRef: null,
  expanded: false,
  disabled: false,
  close: () => null,
  onChange: () => null,
});

export const Dropdown = <T extends string = DefaultDropdownValue>({
  children,
  onChange,
  disabled = false,
  multiple = false,
}: DropdownProps<T>) => {
  // refs
  const triggerRef = useRef<HTMLElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  // optionList portal
  const [container, setContainer] = useState<DropdownTypes['container']>(null);
  const expanded = container !== null;
  const uniqueId = useMemo(() => generateUniqueId(), []);

  // open/close
  const open = () => {
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const close = () => {
    const container = document.getElementById(uniqueId);
    container?.remove();
    setContainer(null);
  };
  const toggle = () => {
    expanded ? close() : open();
  };

  // optionList의 위치를 정하는 로직
  useOptionListPosition({ container, triggerRef, optionListRef });
  // event handlers
  useClick({ triggerRef, optionListRef, close, toggle, onChange, disabled, multiple });
  useKeyDown({ triggerRef, optionListRef, close, toggle, onChange, disabled, multiple });

  return (
    <DropdownContext.Provider
      value={
        { container, triggerRef, optionListRef, expanded, disabled, close, onChange } as Pick<
          DropdownTypes<T>,
          'container' | 'triggerRef' | 'optionListRef' | 'expanded' | 'disabled' | 'close' | 'onChange'
        >
      }
    >
      {children}
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = ({ children }: { children: React.ReactElement }) => {
  const { triggerRef, expanded, disabled } = useContext(DropdownContext);

  return React.cloneElement(children, { ...children.props, expanded, disabled, ref: triggerRef });
};

Dropdown.Bar = React.forwardRef(
  (
    { value, placeholder, expanded = false, disabled = false, ...props }: DropdownBarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Bar
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={expanded}
        aria-disabled={disabled}
        {...props}
      >
        <span aria-placeholder={value ? undefined : placeholder}>{value || placeholder}</span>
        <ChevronDownIcon size={12} className="arrowIcon" />
      </Bar>
    );
  },
);

Dropdown.OptionList = ({ children, zIndex = popperZIndex, ...props }: OptionListProps) => {
  const { container, optionListRef } = useContext(DropdownContext);

  return (
    <Portal container={container}>
      <OptionList role="listbox" ref={optionListRef} style={{ zIndex }} {...props}>
        {children}
      </OptionList>
    </Portal>
  );
};

Dropdown.Option = ({ value, label, selected = false, disabled = false, ...props }: OptionProps) => {
  return (
    <Option
      role="option"
      data-value={value}
      key={value}
      aria-disabled={disabled}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      {...props}
    >
      {label ?? value}
    </Option>
  );
};
