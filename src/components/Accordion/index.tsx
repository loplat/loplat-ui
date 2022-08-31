import React, { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import type { ReactNode, FunctionComponentElement } from 'react';
import type { AccordionIndicatorProps, AccordionProps, AccordionTitleProps, IconPosition } from './types';
import { AccordionContextProvider, useAccordion } from './utils';
import { Summary, Content, Details, IconWrapper } from './styles';

function narrowComponentWithDisplayName(component: ReactNode): component is FunctionComponentElement<HTMLDivElement> {
  return React.isValidElement(component) && typeof component.type !== 'string';
}

export const INDICATOR_DISPLAY_NAME = 'AccordionIndicator';
export const DEFAULT_DURATION = 300;
export const DEFAULT_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const DEFAULT_KEYFRAMES = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-180deg)' }];
export const Accordion = ({
  children,
  onToggle,
  duration = DEFAULT_DURATION,
  open = false,
  variant,
  easing = DEFAULT_EASING,
  ...props
}: AccordionProps) => {
  const accordionRef = useRef<HTMLDetailsElement>(null);

  return (
    <AccordionContextProvider {...{ open, onToggle, duration, easing, variant, accordionRef }}>
      <Details ref={accordionRef} {...{ variant, duration, easing }} {...props}>
        {children}
      </Details>
    </AccordionContextProvider>
  );
};

const AccordionTitle = forwardRef<HTMLDivElement, AccordionTitleProps>(function AccordionTitle(
  { children, ...props },
  ref,
) {
  const { toggle, getAccordionTitleProps } = useAccordion();
  const [iconPosition, setIconPosition] = useState<IconPosition | null>(null);

  useEffect(() => {
    const idx = React.Children.toArray(children).findIndex(
      (child) => narrowComponentWithDisplayName(child) && child.type.displayName === INDICATOR_DISPLAY_NAME,
    );
    setIconPosition(idx === 0 ? 'start' : idx > 0 ? 'end' : null);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Summary
      {...props}
      {...getAccordionTitleProps()}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(e);
      }}
      ref={ref}
    >
      {/* NOTE: safari 구버전에서 summary tag에 display: grid가 적용되지 않는 버그 대응 용으로 div 작성 */}
      <div className={iconPosition ? `iconPosition_${iconPosition}` : ''}>{children}</div>
    </Summary>
  );
});

const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function AccordionContent(
  { children, ...props },
  ref,
) {
  const { contentRef, getAccordionBodyProps, variant } = useAccordion();

  return (
    <Content
      {...props}
      className={`${props.className ?? ''} ${variant ?? ''}`}
      {...getAccordionBodyProps()}
      ref={contentRef}
    >
      {/* NOTE: padding 을 포함한 기하학 height을 정확히 구하기 위한 div wrapper */}
      <div ref={ref}>{children}</div>
    </Content>
  );
});

export const AccordionIndicator = ({ children, keyframes = DEFAULT_KEYFRAMES }: AccordionIndicatorProps) => {
  const { setIconAnimation } = useAccordion();
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (keyframes.length < 2)
      throw new Error('The keyframes property of Accordion.Indicator must have 2 and more keyframes.');
    if (keyframes?.length && iconRef.current) setIconAnimation(keyframes, iconRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <IconWrapper ref={iconRef}>{children}</IconWrapper>;
};
AccordionIndicator.displayName = INDICATOR_DISPLAY_NAME;

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
Accordion.Indicator = AccordionIndicator;
