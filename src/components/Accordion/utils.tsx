import React, { useRef, createContext, useContext, useMemo, useEffect } from 'react';
import type { AccordionContextReturnType, AccordionContextProviderProps } from './types';
import { generateUniqueId } from '../../functions/uniqueId';
const AccordionContext = createContext<AccordionContextReturnType | undefined>(undefined);
export const AccordionContextProvider = ({
  children,
  open,
  onToggle,
  duration,
  easing,
}: AccordionContextProviderProps): JSX.Element => {
  const isOpen = useRef(open);
  const animationStatus = useRef<{ expanding: boolean; shrinking: boolean }>({ expanding: false, shrinking: false });
  const accordionRef = useRef<HTMLDetailsElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const iconAnimationRef = useRef<Animation | null>(null);
  const [headerId, bodyId] = useMemo(() => ['header', 'body'].map((type) => `${type}__${generateUniqueId()}`), []);

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    const accordion = accordionRef.current;
    const content = contentRef.current;
    if (!accordion) throw new DOMException('AccordionTitle must be used within Accordion.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    if (!onToggle) {
      isOpen.current = !!isOpen.current;
    } else {
      isOpen.current = open;
      onToggle(e);
    }

    accordion.classList.toggle('expanded');
    const isExpanded = accordion.hasAttribute('open');
    const { expanding, shrinking } = animationStatus.current;
    const icon = iconAnimationRef.current;
    const currentHeight = content.offsetHeight;
    if (shrinking || !isExpanded) {
      requestAnimationFrame(() => {
        animateOpen(currentHeight);
        if (icon) {
          icon.playbackRate = 1;
          icon.play();
        }
      });
    } else if (expanding || isExpanded) {
      requestAnimationFrame(() => {
        setAnimation('shrinking', currentHeight, 0);
        if (icon) {
          icon.playbackRate = -1;
          icon.play();
        }
      });
    }
  };

  useEffect(() => {
    if (open === true) {
      const content = contentRef.current;
      const accordion = accordionRef.current;
      if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
      if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

      accordion.setAttribute('open', 'true');
      accordion.classList.add('expanded');
      content.style.height = 'auto';
      if (iconAnimationRef.current) {
        console.log('useEffect: open??????');
        iconAnimationRef.current.finish();
      }
    }
  }, []);

  const animateOpen = (currentHeight: number) => {
    const content = contentRef.current;
    const accordion = accordionRef.current;
    if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    accordion.setAttribute('open', 'true');
    content.style.height = 'auto';
    const finalHeight = content.scrollHeight;
    content.style.height = `${currentHeight}px`;
    setAnimation('expanding', currentHeight, finalHeight);
  };

  const setIconAnimation = (keyframes: Keyframe[]): void => {
    const icon = iconRef.current;
    if (!icon) throw new DOMException('Accordion must be used.', 'NotFoundError');
    const iconAnimation = icon.animate(keyframes, { easing, duration, fill: 'forwards' });
    iconAnimation.pause();
    if (open) {
      iconAnimation.finish();
    }
    iconAnimationRef.current = iconAnimation;
  };

  const setAnimation = (status: 'expanding' | 'shrinking', start: number, end: number) => {
    const content = contentRef.current;
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    animationStatus.current[status] = true;

    if (animationRef.current) animationRef.current.cancel();
    animationRef.current = content.animate(
      {
        height: [`${start}px`, `${end}px`],
        easing,
      },
      { duration },
    );
    animationRef.current.onfinish = () => onAnimationFinish(status);
    animationRef.current.oncancel = () => {
      animationStatus.current[status] = false;
    };
  };

  const onAnimationFinish = (status: 'expanding' | 'shrinking') => {
    const accordion = accordionRef.current;
    const content = contentRef.current;
    if (!accordion) throw new DOMException('Accordion must be used.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');

    // NOTE: details 의 자식 중 summary 이외는 DOM에서 즉각적으로 숨기기 때문에,
    // 닫을 때는 애니메이션이 완전히 끝난 후 open 상태값을 변경해야 함
    accordion.open = status === 'expanding';

    // NOTE: height을 auto로 변경하여, screen resizing 대응
    if (status === 'expanding') content.style.height = 'auto';
    else content.style.height = '0px';

    // clear
    animationRef.current = null;
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
      accordionRef,
      contentRef,
      getAccordionTitleProps,
      getAccordionBodyProps,
      setIconAnimation,
      iconRef,
    }),
    [],
  );

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export const useAccordion = (): AccordionContextReturnType => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new DOMException(
      'Accordion[Title|Body] components must be used within a Accordion component',
      'NotFoundError',
    );

  return context;
};

type Keyframe = { [property: string]: string | number };
