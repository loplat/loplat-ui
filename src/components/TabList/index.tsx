import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { TabListProps, DecoratorPosition, TabListStyles, DefaultTabValue } from './types';
import { TabListDiv, Tab, allDefaultStyles } from './styles';

export const TabList = <T extends string = DefaultTabValue>({
  variant = 'ellipse',
  options,
  selectedValue,
  onChange,
  fullWidth = false,
  ...props
}: TabListProps<T>): React.ReactElement => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabElements = useRef<HTMLButtonElement[]>([]);
  const [decoratorPosition, setDecoratorPosition] = useState<DecoratorPosition | null>(null);

  /** event handlers */
  const handleSelectTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const targetTab = tabElements.current.find((tabElement) => tabElement.contains(target));

    if (targetTab) {
      const targetValue = targetTab.dataset.value as T;
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

  /** background-color of selected tab */
  const updateDecoratorPosition = () => {
    const selectedTab = tabListRef.current?.querySelector(`button[aria-selected="true"]`) as HTMLButtonElement;

    if (selectedTab) {
      setDecoratorPosition({
        left: selectedTab.offsetLeft,
        width: selectedTab.clientWidth,
      });
    }
  };

  useEffect(() => {
    tabElements.current = Array.from(tabListRef.current!.children) as HTMLButtonElement[]; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    // NOTE: 폰트에 따라 clientWidth가 변하는 것에 대응
    document.fonts.ready.then(() => {
      updateDecoratorPosition();
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateDecoratorPosition();
  }, [selectedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateDecoratorPosition();
    if (fullWidth) {
      window.addEventListener('resize', updateDecoratorPosition);
    }
    return () => {
      window.removeEventListener('resize', updateDecoratorPosition);
    };
  }, [fullWidth]); // eslint-disable-line react-hooks/exhaustive-deps

  /** styles */
  const styles: TabListStyles = useMemo(() => {
    const defaultStyles = allDefaultStyles[variant];
    const propStyles = props.styles;
    return {
      tabList: { ...defaultStyles.tabList, ...propStyles?.tabList },
      tab: { ...defaultStyles.tab, ...propStyles?.tab },
    };
  }, [variant, props.styles]);

  return (
    <TabListDiv
      role="tablist"
      ref={tabListRef}
      onClick={handleSelectTab}
      onKeyDown={handleArrowKey}
      {...props}
      decoratorPosition={decoratorPosition}
      fullWidth={fullWidth}
      styles={styles}
    >
      {options.map(({ value, label, disabled, ...tabProps }) => {
        const selected = value === selectedValue;
        return (
          <Tab
            role="tab"
            tabIndex={selected ? 0 : -1}
            aria-selected={disabled ? undefined : selected}
            selected={selected}
            disabled={disabled}
            data-value={value}
            key={value}
            {...tabProps}
            styles={styles}
          >
            {label ?? value}
          </Tab>
        );
      })}
    </TabListDiv>
  );
};
