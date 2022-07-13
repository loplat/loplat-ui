import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TabListProps, DecoratorCss } from './types';
import { TabListDiv, Tab } from './styles';
import { attachUniqueId, detachUniqueId, generateUniqueId } from '../../functions/uniqueId';

export const TabList = ({ tabs, selectedValue, onChange, ...props }: TabListProps): React.ReactElement => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabElements = useRef<HTMLButtonElement[]>([]);
  const [decoratorCss, setDecoratorCss] = useState<DecoratorCss | null>(null);
  const uniqueId = useMemo(() => generateUniqueId(), []);

  const handleClickTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const targetTab = tabElements.current.find((tabElement) => tabElement.contains(target));

    if (targetTab) {
      const targetValueWithUniqueId = String(targetTab.dataset.value);
      const targetValue = detachUniqueId(targetValueWithUniqueId, uniqueId);
      if (selectedValue !== targetValue) {
        onChange(e, targetValue);
      }
    }
  };

  const handleArrowKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const focusedElement = document.activeElement as HTMLButtonElement;
    if (!focusedElement) return;

    const focusableTabElements = tabElements.current.filter((element) => !element.disabled);
    const focusedTabIndex = focusableTabElements.indexOf(focusedElement);

    if (e.key === 'ArrowRight') {
      const nextTab = focusableTabElements[focusedTabIndex + 1] || focusableTabElements[0];
      nextTab.focus();
    } else if (e.key === 'ArrowLeft') {
      const previousTab =
        focusableTabElements[focusedTabIndex - 1] || focusableTabElements[focusableTabElements.length - 1];
      previousTab.focus();
    }
  };

  const updateDecoratorCss = () => {
    const selectedValueWithUniqueId = attachUniqueId(selectedValue, uniqueId);
    const selectedTab = document.querySelector(
      `button[data-value="${selectedValueWithUniqueId}"]`,
    ) as HTMLButtonElement;

    if (selectedTab) {
      const tabIndex = Number(selectedTab.dataset.index);
      setDecoratorCss({
        left: tabElements.current.slice(0, tabIndex).reduce((prev, curr) => prev + curr.clientWidth, 0),
        width: selectedTab.clientWidth,
      });
    }
  };

  useEffect(() => {
    tabElements.current = Array.from(tabListRef.current!.children) as HTMLButtonElement[]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    updateDecoratorCss();

    // NOTE: 폰트에 따라 clientWidth가 변하는 것에 대응
    document.fonts.ready.then(() => {
      updateDecoratorCss();
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateDecoratorCss();
  }, [selectedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TabListDiv
      role="tablist"
      ref={tabListRef}
      onClick={handleClickTab}
      onKeyDown={handleArrowKey}
      DecoratorCss={decoratorCss}
      {...props}
    >
      {tabs.map(({ value, label, isDisabled, ...tabProps }, index) => {
        const isSelected = value === selectedValue;
        const valueWithUniqueId = attachUniqueId(value, uniqueId);

        return (
          <Tab
            role="tab"
            tabIndex={isSelected ? 0 : -1}
            aria-selected={isDisabled ? undefined : isSelected}
            isSelected={isSelected}
            disabled={isDisabled}
            data-value={valueWithUniqueId}
            data-index={index}
            key={index}
            {...tabProps}
          >
            {label ?? value}
          </Tab>
        );
      })}
    </TabListDiv>
  );
};
