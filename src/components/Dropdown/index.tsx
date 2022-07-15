/**
 * TODO: Compound Components 패턴으로 변경하기
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { spacing } from '../../core';
import { generateUniqueId } from '../../functions/generator';
import { Portal } from '../../utils';
import { ChevronDownIcon } from '../../assets/Icon';
import { DropdownProps } from './types';
import { Bar, MenuList, MenuItem } from './styles';

export const Dropdown = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
  placeholder,
  zIndex = 0,
  ...props
}: DropdownProps): React.ReactElement => {
  // refs
  const barRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  // menuList portal
  const [container, setContainer] = useState<Element | null>(null);
  const isOpened = container !== null;
  const uniqueId = useMemo(() => generateUniqueId(), []);

  // menuList position
  const changeMenuListPosition = useCallback(() => {
    const menuListElement = menuListRef.current;
    if (menuListElement) {
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;
      const barBoundingRect = barRef.current!.getBoundingClientRect();

      menuListElement.style.minWidth = `${barBoundingRect.width}px`;
      menuListElement.style.top = `${windowScrollY + barBoundingRect.bottom + spacing(1)}px`;
      menuListElement.style.left = `${windowScrollX + barBoundingRect.left}px`;
      menuListElement.style.transform = 'scale(1)';
      menuListElement.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeMenuListPosition);
    return () => {
      // unmount할 때 cleanup
      window.removeEventListener('resize', changeMenuListPosition);
      close();
    };
  }, [changeMenuListPosition]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (container) {
      changeMenuListPosition();
    }
  }, [changeMenuListPosition, container]);

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
    isOpened ? close() : open();
  };

  // event listeners
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (disabled) return;

      const target = e.target as HTMLElement;
      const barElement = barRef.current;
      const menuListElement = menuListRef.current;

      if (!barElement?.contains(target) && !menuListElement?.contains(target)) {
        close();
      } else if (barElement?.contains(target)) {
        toggle();
      } else if (menuListElement?.contains(target)) {
        const targetMenu = (Array.from(menuListElement.children) as HTMLLIElement[]).find((tabElement) =>
          tabElement.contains(target),
        );
        if (targetMenu) {
          const value = targetMenu.dataset.value as string;
          onChange(e, value);
          close();
        }
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (disabled) return;

      const focusedElement = document.activeElement as HTMLElement;
      const barElement = barRef.current;
      const menuListElement = menuListRef.current;

      if (!barElement?.contains(focusedElement) && !menuListElement?.contains(focusedElement)) return;

      if (e.code === 'Escape' || e.code === 'Tab') {
        barElement?.focus();
        close();
      }

      if (e.code === 'Enter' || e.code === 'Space') {
        if (focusedElement === barElement) {
          toggle();
        } else if (menuListElement?.contains(focusedElement)) {
          const value = focusedElement.dataset.value as string;
          onChange(e, value);
          close();
          barElement?.focus();
        }
      }

      if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        if (!menuListElement) return;
        const menuElements = Array.from(menuListElement.children) as HTMLElement[];

        if (focusedElement === barElement) {
          const selectedMenu = menuElements.find((element) => element.dataset.value === selectedValue);

          if (selectedMenu) {
            selectedMenu.focus();
          } else {
            menuElements[0].focus();
          }
        } else if (menuListElement.contains(focusedElement)) {
          const focusedMenuIndex = menuElements.indexOf(focusedElement);

          if (e.code === 'ArrowUp') {
            menuElements[focusedMenuIndex - 1]?.focus();
          } else if (e.code === 'ArrowDown') {
            menuElements[focusedMenuIndex + 1]?.focus();
          }
        }
      }
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <Bar
        ref={barRef}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpened}
        className={[isOpened && 'open', disabled && 'disabled'].filter(Boolean).join(' ')}
        {...props}
      >
        <span className={selectedValue ? '' : 'placeholder'}>{selectedValue || placeholder}</span>
        <ChevronDownIcon size={12} suffixForId={uniqueId} className="arrowIcon" />
      </Bar>
      <Portal container={container}>
        <MenuList ref={menuListRef} role="listbox" style={{ zIndex }}>
          {options.map(({ value, label }) => {
            const isSelected = value === selectedValue;
            return (
              <MenuItem
                role="option"
                aria-selected={isSelected}
                data-value={value}
                key={value}
                tabIndex={isSelected ? 0 : -1}
                className={isSelected ? 'selected' : ''}
              >
                {label ?? value}
              </MenuItem>
            );
          })}
        </MenuList>
      </Portal>
    </>
  );
};
