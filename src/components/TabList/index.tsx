import React, { useEffect, useRef, useState } from 'react';
import { TabListProps, DecoratorCss } from './types';
import { TabListDiv, Tab } from './styles';

export const TabList = ({ tabs, selectedValue, onChange, ...props }: TabListProps): React.ReactElement => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabElements = useRef<HTMLButtonElement[]>([]);
  const [decoratorCss, setDecoratorCss] = useState<DecoratorCss | null>(null);

  const handleClickTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const targetTab = tabElements.current.find((tabElement) => tabElement.contains(target));

    if (targetTab) {
      const targetValue = targetTab.dataset.value as string;
      if (selectedValue !== targetValue) {
        onChange(e, targetValue);
      }
    }
  };

  const handleArrowKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const focusedElement = document.activeElement as HTMLButtonElement;
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
    const selectedTab = tabListRef.current?.querySelector(`button[aria-selected="true"]`) as HTMLButtonElement;

    if (selectedTab) {
      setDecoratorCss({
        left: selectedTab.offsetLeft,
        width: selectedTab.clientWidth,
      });
    }
  };

  useEffect(() => {
    tabElements.current = Array.from(tabListRef.current!.children) as HTMLButtonElement[]; // eslint-disable-line @typescript-eslint/no-non-null-assertion

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
      decoratorCss={decoratorCss}
      {...props}
    >
      {tabs.map(({ value, label, isDisabled, ...tabProps }) => {
        const isSelected = value === selectedValue;
        return (
          <Tab
            role="tab"
            tabIndex={isSelected ? 0 : -1}
            aria-selected={isDisabled ? undefined : isSelected}
            isSelected={isSelected}
            disabled={isDisabled}
            data-value={value}
            key={value}
            {...tabProps}
          >
            {label ?? value}
          </Tab>
        );
      })}
    </TabListDiv>
  );
};
