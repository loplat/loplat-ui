import React, { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import type { ReactNode, FunctionComponentElement } from 'react';
import type { AccordionIndicatorProps, AccordionProps, AccordionTitleProps, IconPosition } from './types';
import { AccordionContextProvider, useAccordion } from './utils';
import { Summary, Heading, Content, Details, IconWrapper } from './styles';

function narrowComponentWithDisplayName(component: ReactNode): component is FunctionComponentElement<HTMLDivElement> {
  return React.isValidElement(component) && typeof component.type !== 'string';
}

export const INDICATOR_DISPLAY_NAME = 'AccordionIndicator';
export const DEFAULT_DURATION = 300;
export const DEFAULT_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const Accordion = ({
  children,
  onToggle,
  duration = DEFAULT_DURATION,
  open = false,
  type,
  easing = DEFAULT_EASING,
  ...props
}: AccordionProps) => {
  const accordionRef = useRef<HTMLDetailsElement>(null);

  return (
    <AccordionContextProvider
      open={open}
      onToggle={onToggle}
      duration={duration}
      easing={easing}
      accordionRef={accordionRef}
    >
      <Details ref={accordionRef} {...{ type, duration, easing }} {...props}>
        {children}
      </Details>
    </AccordionContextProvider>
  );
};

const AccordionTitle = forwardRef<HTMLDivElement, AccordionTitleProps>(({ children, tag = 'h3', ...props }, ref) => {
  const { toggle, getAccordionTitleProps } = useAccordion();
  const [iconPosition, setIconPosition] = useState<IconPosition>('end');
  const [icon, setIcon] = useState<ReactNode>(null);

  useEffect(() => {
    React.Children.toArray(children).find((child, idx) => {
      if (narrowComponentWithDisplayName(child) && child.type.displayName === INDICATOR_DISPLAY_NAME) {
        if (idx === 0) setIconPosition('start');
        setIcon(child);
        return true;
      }
      return false;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Summary
      {...props}
      {...getAccordionTitleProps()}
      iconPosition={iconPosition}
      onClick={(e) => {
        e.preventDefault();
        toggle(e);
      }}
      ref={ref}
    >
      {/* NOTE: safari 구버전에서 summary tag에 flex가 적용되지 않는 버그 대응 */}
      <div>
        {iconPosition === 'start' && icon}
        {React.Children.map(children, (child) => {
          if (typeof child === 'string') return <Heading as={tag}>{child}</Heading>;
          if (narrowComponentWithDisplayName(child) && child.type.displayName === INDICATOR_DISPLAY_NAME) return;
          return child;
        })}
        {iconPosition === 'end' && icon}
      </div>
    </Summary>
  );
});

const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  const { contentRef, getAccordionBodyProps } = useAccordion();

  return (
    <Content {...props} {...getAccordionBodyProps()} ref={contentRef}>
      {/* NOTE: padding 을 포함한 기하학 height을 정확히 구하기 위한 div wrapper */}
      <div ref={ref}>{children}</div>
    </Content>
  );
});

export const DEFAULT_KEYFRAMES = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-180deg)' }];
export function AccordionIndicator({ children, keyframes = DEFAULT_KEYFRAMES }: AccordionIndicatorProps) {
  const { setIconAnimation } = useAccordion();
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (keyframes?.length && iconRef.current) setIconAnimation(keyframes, iconRef);
  }, [keyframes, setIconAnimation]);

  return (
    <IconWrapper ref={iconRef} data-type="icon">
      {children}
    </IconWrapper>
  );
}
AccordionIndicator.displayName = INDICATOR_DISPLAY_NAME;

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
Accordion.Indicator = AccordionIndicator;

<Accordion>
  <Accordion.Title>hi</Accordion.Title>
  <Accordion.Content>yes</Accordion.Content>
</Accordion>;
