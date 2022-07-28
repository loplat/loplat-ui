import React, { forwardRef, Ref, useEffect, useState } from 'react';
import type { AccordionIconProps, AccordionProps, AccordionTitleProps, AccordionWrapperProps } from './types';
import { AccordionContextProvider, useAccordion } from './utils';
import { Summary, Heading, Content, Details, IconWrapper } from './styles';

const DEFAULT_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
const Accordion = forwardRef(function (
  {
    children,
    onToggle,
    duration = 500,
    open = false,
    type = 'fill',
    easing = DEFAULT_EASING,
    ...props
  }: AccordionProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <AccordionContextProvider open={open} onToggle={onToggle} duration={duration} easing={easing}>
      <div ref={ref}>
        <Wrapper {...props} type={type} duration={duration} easing={easing}>
          {children}
        </Wrapper>
      </div>
    </AccordionContextProvider>
  );
});

const Wrapper = ({ children, ...props }: AccordionWrapperProps) => {
  const { accordionRef } = useAccordion();
  return (
    <Details ref={accordionRef} {...props}>
      {children}
    </Details>
  );
};

type IconPosition = 'start' | 'end';
const AccordionTitle = ({ children, headingLevel = 'h3', ...props }: AccordionTitleProps): JSX.Element => {
  const { toggle, getAccordionTitleProps } = useAccordion();
  const [iconPosition, setIconPosition] = useState<IconPosition>('end');
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);
    let position: IconPosition = 'end';
    const idx = childrenArray.findIndex((child) => {
      return React.isValidElement(child) && child.type.displayName === 'AccordionIcon';
    });
    if (idx === 0) position = 'start';
    setIconPosition(position);
    setIcon(childrenArray[idx]);
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
    >
      <div role="button">
        {iconPosition === 'start' && icon}
        {React.Children.map(children, (child) => {
          if (typeof child === 'string') {
            return <Heading as={headingLevel}>{child}</Heading>;
          }
          if (React.isValidElement(child) && child.type?.displayName === 'AccordionIcon') return;
          return child;
        })}
        {iconPosition === 'end' && icon}
      </div>
    </Summary>
  );
};

const AccordionBody = ({ children, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>): JSX.Element => {
  const { contentRef, getAccordionBodyProps } = useAccordion();

  return (
    <Content {...props} {...getAccordionBodyProps()} ref={contentRef}>
      <div>{children}</div>
    </Content>
  );
};

const defaultKeyframes = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-180deg)' }];
export const AccordionIcon = ({ children, keyframes = defaultKeyframes }: AccordionIconProps) => {
  const { setIconAnimation, iconRef } = useAccordion();

  useEffect(() => {
    if (keyframes?.length) setIconAnimation(keyframes);
  }, [keyframes, setIconAnimation]);
  return (
    <IconWrapper ref={iconRef} data-type="icon">
      {children}
    </IconWrapper>
  );
};
AccordionIcon.displayName = 'AccordionIcon';

export { AccordionBody, Accordion, AccordionTitle };
