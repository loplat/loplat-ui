import React, { useRef, createContext, useContext, useMemo, useEffect } from 'react';
import { MouseEvent, RefObject } from 'react';
import type { AccordionContextReturnType, AccordionContextProviderProps, Keyframe } from './types';
import { generateUniqueId } from '../../functions/uniqueId';

export const AccordionContext = createContext<AccordionContextReturnType | undefined>(undefined);
export const AccordionContextProvider = ({
  children,
  open: initialOpen,
  onToggle,
  duration,
  easing,
  accordionRef,
}: AccordionContextProviderProps): JSX.Element => {
  const animationStatus = useRef<{ expanding: boolean; shrinking: boolean }>({ expanding: false, shrinking: false });
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionAnimationRef = useRef<Animation | null>(null);
  const iconAnimationRef = useRef<Animation | null>(null);
  const [headerId, bodyId] = useMemo(
    () => ['header', 'body'].map((type) => `loplat-ui__${type}__${generateUniqueId()}`),
    [],
  );

  const toggle = (e: MouseEvent<HTMLElement>) => {
    const accordion = accordionRef.current;
    const content = contentRef.current;
    if (!accordion) throw new DOMException('AccordionTitle must be used within Accordion.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    if (onToggle) onToggle(e);

    accordion.classList.toggle('expanded');
    const isExpanded = accordion.hasAttribute('open');
    const { expanding, shrinking } = animationStatus.current;
    const iconAnimation = iconAnimationRef.current;
    const currentHeight = content.offsetHeight;
    if (shrinking || !isExpanded) {
      requestAnimationFrame(() => {
        animateOpen(currentHeight);
        if (iconAnimation) {
          iconAnimation.playbackRate = 1;
          iconAnimation.play();
        }
      });
    } else if (expanding || isExpanded) {
      requestAnimationFrame(() => {
        setAnimation('shrinking', currentHeight, 0);
        if (iconAnimation) {
          iconAnimation.playbackRate = -1;
          iconAnimation.play();
        }
      });
    }
  };

  useEffect(() => {
    // NOTE: open=true가 초기값일 경우, CLS가 생기지 않도록 하는 로직
    if (initialOpen) {
      const content = contentRef.current;
      const accordion = accordionRef.current;
      if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
      if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

      accordion.setAttribute('open', 'true');
      accordion.classList.add('expanded');
      content.style.height = 'auto';
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const animateOpen = (currentHeight: number) => {
    const content = contentRef.current;
    const accordion = accordionRef.current;
    if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    // NOTE: safari에서 Body div(height=0) 일때, 자식의 offsetHeight을 0으로 계산하는 이슈 대응
    accordion.setAttribute('open', 'true');
    content.style.height = 'auto';
    const finalHeight = content.scrollHeight;
    content.style.height = `${currentHeight}px`;
    setAnimation('expanding', currentHeight, finalHeight);
  };

  const setIconAnimation = (keyframes: Keyframe[], iconRef: RefObject<HTMLDivElement>): void => {
    const icon = iconRef.current;
    if (!icon) throw new DOMException('Accordion must be used.', 'NotFoundError');
    const iconAnimation = icon.animate(keyframes, { easing, duration, fill: 'forwards' });
    iconAnimation.pause();
    // NOTE: open=true가 초기값일 경우, CLS가 생기지 않도록 하는 로직
    if (initialOpen) iconAnimation.finish();
    iconAnimationRef.current = iconAnimation;
  };

  const setAnimation = (status: 'expanding' | 'shrinking', start: number, end: number) => {
    const content = contentRef.current;
    if (!content) throw new DOMException('Accordion.Body must be used within Accordion.', 'NotFoundError');

    animationStatus.current[status] = true;

    if (accordionAnimationRef.current) accordionAnimationRef.current.cancel();
    accordionAnimationRef.current = content.animate(
      {
        height: [`${start}px`, `${end}px`],
        easing,
      },
      { duration },
    );
    accordionAnimationRef.current.onfinish = () => onAnimationFinish(status);
    accordionAnimationRef.current.oncancel = () => {
      animationStatus.current[status] = false;
    };
  };

  const onAnimationFinish = (status: 'expanding' | 'shrinking') => {
    const accordion = accordionRef.current;
    const content = contentRef.current;
    if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    /** NOTE: details 의 자식 중 summary 이외는 DOM에서 즉각적으로 숨기기 때문에,
     * 닫을 때는 애니메이션이 완전히 끝난 후 open 상태값을 변경해야 함
     */
    accordion.open = status === 'expanding';

    // NOTE: height을 auto로 변경하여, screen resizing 대응
    if (status === 'expanding') content.style.height = 'auto';
    else content.style.height = '0px';

    // clear
    accordionAnimationRef.current = null;
    animationStatus.current.shrinking = false;
    animationStatus.current.expanding = false;
  };

  const getAccordionTitleProps = () => {
    return {
      id: headerId,
      'aria-controls': bodyId,
    };
  };
  const getAccordionBodyProps = () => {
    return {
      id: bodyId,
      'aria-labelledby': headerId,
      role: 'region',
    };
  };

  const value = useMemo(
    () => ({
      toggle,
      setIconAnimation,
    }),
    [duration, easing], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <AccordionContext.Provider value={{ ...value, contentRef, getAccordionBodyProps, getAccordionTitleProps }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextReturnType => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('The sub-components of Accordion must be used within the Accordion component.');

  return context;
};
