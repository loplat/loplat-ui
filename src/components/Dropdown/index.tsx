'use client';

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
import { Bar, OptionList, Option, ListSubHeader } from './styles';
import { generateUniqueId } from '../../functions/uniqueId';
import { useClick, useKeyDown, useOptionListPosition } from './hooks';
import { overHeaderZIndex } from '../../core';

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
  isOpen, // 외부에서 드롭다운 상태 제어
  onClose, // 닫힘 콜백
}: DropdownProps<T>) => {
  // refs
  const triggerRef = useRef<HTMLElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  // optionList portal
  const [container, setContainer] = useState<DropdownTypes['container']>(null);
  const isControlled = typeof isOpen === 'boolean'; // 상태가 외부에서 제어되는지 확인
  const expanded = isControlled ? isOpen : container !== null; // 내부 상태와 props 결합
  const uniqueId = useMemo(() => generateUniqueId(), []);

  // open/close
  const open = () => {
    if (isControlled) return; // 외부에서 제어될 경우 내부에서 open() 호출 안 함
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };

  const close = () => {
    if (isControlled) {
      onClose?.(); // 외부에서 상태를 관리하는 경우 onClose 콜백 호출
      return;
    }
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
  useClick({ triggerRef, optionListRef, expanded, close, toggle, onChange, disabled, multiple });
  useKeyDown({ triggerRef, optionListRef, expanded, close, toggle, onChange, disabled, multiple });

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

  return React.cloneElement(children, { ...children.props, 'data-expanded': expanded, disabled, ref: triggerRef });
};

Dropdown.Bar = React.forwardRef(
  (
    { value, placeholder, disabled = false, suffixForId, ...props }: DropdownBarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const uniqueId = useMemo(() => suffixForId ?? generateUniqueId(), [suffixForId]);
    return (
      <Bar ref={ref} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled} {...props}>
        <span aria-placeholder={value ? undefined : placeholder}>{value || placeholder}</span>
        <ChevronDownIcon size={12} className="arrowIcon" suffixForId={`dropdown-arrow-icon__${uniqueId}`} />
      </Bar>
    );
  },
);

Dropdown.OptionList = ({ children, zIndex = overHeaderZIndex, ...props }: OptionListProps) => {
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

Dropdown.ListSubHeader = ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <ListSubHeader role="listitem" aria-selected={false} tabIndex={-1} {...props}>
      {children}
    </ListSubHeader>
  );
};
