import { useCallback, useEffect } from 'react';
import { DropdownTypes } from './types';
import { spacing } from '../../core';

type DropdownEventParams<T extends string> = Pick<
  DropdownTypes<T>,
  'triggerRef' | 'optionListRef' | 'close' | 'toggle' | 'onChange' | 'disabled' | 'multiple'
>;

export const useClick = <T extends string>({
  triggerRef,
  optionListRef,
  close,
  toggle,
  onChange,
  disabled,
  multiple,
}: DropdownEventParams<T>) => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (disabled) return;

      const target = e.target as HTMLElement;
      const triggerElement = triggerRef?.current;
      const optionListElement = optionListRef?.current;

      const triggerIsTarget = triggerElement && triggerElement.contains(target);
      const optionIsTarget = optionListElement && optionListElement.contains(target);

      if (!triggerIsTarget && !optionIsTarget) {
        close();
      } else if (triggerIsTarget) {
        toggle();
      } else if (optionIsTarget) {
        const targetOption = (Array.from(optionListElement.children) as HTMLLIElement[])
          .filter((optionElement) => optionElement.ariaDisabled !== 'true')
          .find((optionElement) => optionElement.contains(target));

        if (targetOption) {
          const value = targetOption.dataset.value as T;
          onChange(e, value);
          if (!multiple) {
            close();
          }
        }
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const useKeyDown = <T extends string>({
  triggerRef,
  optionListRef,
  close,
  toggle,
  onChange,
  disabled,
  multiple,
}: DropdownEventParams<T>) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (disabled) return;

      const focusedElement = document.activeElement as HTMLElement;
      const triggerElement = triggerRef?.current;
      const optionListElement = optionListRef?.current;

      const triggerIsFocused = triggerElement && triggerElement.contains(focusedElement);
      const optionIsFocused = optionListElement && optionListElement.contains(focusedElement);

      if (!triggerIsFocused && !optionIsFocused) return;

      if (e.code === 'Enter' || e.code === 'Space') {
        if (triggerIsFocused) {
          toggle();
          e.preventDefault();
        } else if (optionIsFocused) {
          const targetOption = (Array.from(optionListElement.children) as HTMLLIElement[]).find((optionElement) =>
            optionElement.contains(focusedElement),
          );
          if (targetOption) {
            const value = targetOption.dataset.value as T;
            onChange(e, value);
            if (!multiple) {
              close();
              triggerElement?.focus();
              e.preventDefault();
            }
          }
        }
      }

      if (e.code === 'Escape' || e.code === 'Tab') {
        triggerElement?.focus();
        close();
      }

      if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        if (!optionListElement) return;
        e.preventDefault();

        const optionElements = Array.from(optionListElement.children) as HTMLElement[];
        const focusableOptionElements = optionElements.filter((element) => element.ariaDisabled !== 'true');

        if (triggerIsFocused) {
          const selectedOption = optionElements.find((element) => element.ariaSelected === 'true');

          if (selectedOption) {
            selectedOption.focus();
          } else {
            focusableOptionElements[0].focus();
          }
        } else if (optionIsFocused) {
          const focusedOptionIndex = focusableOptionElements.indexOf(focusedElement);

          if (e.code === 'ArrowUp') {
            focusableOptionElements[focusedOptionIndex - 1]?.focus();
          } else if (e.code === 'ArrowDown') {
            focusableOptionElements[focusedOptionIndex + 1]?.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
};

export const useOptionListPosition = ({
  container,
  triggerRef,
  optionListRef,
}: Pick<DropdownTypes, 'container' | 'triggerRef' | 'optionListRef'>) => {
  const changeOptionListPosition = useCallback(() => {
    const triggerElement = triggerRef?.current;
    const optionListElement = optionListRef?.current;

    if (optionListElement && triggerElement) {
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;
      const windowScrollWidth = document.body.scrollWidth;
      const triggerBoundingRect = triggerElement.getBoundingClientRect();

      optionListElement.style.minWidth = `${triggerBoundingRect.width}px`;
      optionListElement.style.top = `${windowScrollY + triggerBoundingRect.bottom + spacing(1)}px`;
      optionListElement.style.left = `${windowScrollX + triggerBoundingRect.left}px`;

      const optionListBoundingRect = optionListElement.getBoundingClientRect();
      // window 오른쪽으로 벗어났을 경우
      if (windowScrollX + optionListBoundingRect.right > windowScrollWidth) {
        optionListElement.style.left = `${triggerBoundingRect.right - optionListElement.offsetWidth}px`;
      }

      optionListElement.style.transform = 'scale(1)';
      optionListElement.style.opacity = '1';
    }
  }, [triggerRef, optionListRef]);

  useEffect(() => {
    if (container) {
      changeOptionListPosition();
    }
  }, [changeOptionListPosition, container]);

  useEffect(() => {
    window.addEventListener('resize', changeOptionListPosition);
    return () => {
      window.removeEventListener('resize', changeOptionListPosition);
      close();
    };
  }, [changeOptionListPosition]);
};
