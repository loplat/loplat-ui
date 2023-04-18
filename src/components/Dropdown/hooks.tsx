import { useCallback, useEffect } from 'react';
import { DropdownTypes } from './types';
import { spacing } from '../../core';

type DropdownEventParams<T extends string> = Pick<
  DropdownTypes<T>,
  'triggerRef' | 'optionListRef' | 'expanded' | 'close' | 'toggle' | 'onChange' | 'disabled' | 'multiple'
>;

export const useClick = <T extends string>({
  triggerRef,
  optionListRef,
  expanded,
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
      const targetIsInputControl = target.tagName === 'INPUT';

      if (targetIsInputControl && expanded) {
        return;
      } else if (!triggerIsTarget && !optionIsTarget) {
        close();
      } else if (triggerIsTarget) {
        toggle();
      } else if (optionIsTarget) {
        const targetOption = (Array.from(optionListElement.children) as HTMLLIElement[])
          .filter((optionElement) => optionElement.ariaDisabled !== 'true')
          .find((optionElement) => optionElement.contains(target));
        if (targetOption) {
          const value = targetOption.dataset.value as T;
          if (!value) return;
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
  expanded,
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
      const focusedTargetIsInputControl = focusedElement.tagName === 'INPUT';

      if (!triggerIsFocused && !optionIsFocused) return;

      if (e.code === 'Enter' || e.code === 'Space') {
        if (focusedTargetIsInputControl) return;

        if (triggerIsFocused) {
          toggle();
          e.preventDefault();
        } else if (optionIsFocused) {
          const targetOption = (Array.from(optionListElement.children) as HTMLLIElement[]).find((optionElement) =>
            optionElement.contains(focusedElement),
          );
          if (targetOption) {
            e.preventDefault();

            const value = targetOption.dataset.value as T;

            if (value) onChange(e, value);
            else if (
              targetOption.getAttribute('role') === 'listitem' &&
              targetOption.querySelector('input[type="checkbox"]')
            ) {
              (targetOption.querySelector('input[type="checkbox"]') as HTMLInputElement).click();
            }
            if (!multiple) {
              close();
              triggerElement?.focus();
            }
          }
        }
      } else if (e.code === 'Escape' || e.code === 'Tab') {
        triggerElement?.focus();
        close();
      } else if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        e.preventDefault();

        if (!optionListElement) {
          toggle();
          return;
        }

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
          const focusableOptions = focusableOptionElements.filter(
            (node) => node.getAttribute('role') === 'option' || !!node.querySelector('input[type="checkbox"]'),
          );
          const focusedOptionIndex = focusableOptions.indexOf(focusedElement);

          if (e.code === 'ArrowUp') {
            focusableOptions[focusedOptionIndex - 1]?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
            focusableOptions[focusedOptionIndex - 1]?.focus({ preventScroll: true });
          } else if (e.code === 'ArrowDown') {
            focusableOptions[focusedOptionIndex - 1]?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
            focusableOptions[focusedOptionIndex + 1]?.focus({ preventScroll: true });
          }
        }
      } else if (focusedTargetIsInputControl && !expanded) {
        toggle();
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
