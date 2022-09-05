import { useState, useRef, createContext, useContext, useMemo, useEffect } from 'react';
import type { MouseEvent } from 'react';
import type { AccordionContextReturnType, AccordionContextProviderProps, Keyframe, AnimateStatus } from './types';
import { generateUniqueId } from '../../functions/uniqueId';

export const AccordionContext = createContext<AccordionContextReturnType | undefined>(undefined);
export const AccordionContextProvider = ({
  children,
  open: initialOpen,
  onToggle,
  duration,
  easing,
  accordionRef,
  variant,
}: AccordionContextProviderProps): JSX.Element => {
  const isMounted = useRef<boolean>(false);
  const animationStatus = useRef<Record<AnimateStatus, boolean>>({ expanding: false, shrinking: false });
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionAnimationRef = useRef<Animation | null>(null);
  const iconAnimationRef = useRef<Animation | null>(null);
  const [titleId, contentId] = useMemo(
    () => ['title', 'content'].map((type) => `loplat-ui__${type}__${generateUniqueId()}`),
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line import/no-unresolved
    import('web-animations-js');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      if (initialOpen) {
        // NOTE: open=true가 초기값일 경우, CLS가 생기지 않도록 하는 로직
        const { accordion, content } = domRequirements();
        accordion.setAttribute('open', 'true');
        accordion.classList.add('expanded');
        content.style.height = 'auto';
      }
    } else {
      animateAccordionByStatus(initialOpen);
    }
  }, [initialOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const domRequirements = () => {
    const accordion = accordionRef.current;
    const content = contentRef.current;
    if (!accordion) throw new DOMException('AccordionTitle must be used within Accordion.', 'NotFoundError');
    if (!content) throw new DOMException('AccordionBody must be used within Accordion.', 'NotFoundError');
    return { accordion, content };
  };

  const toggle = (e: MouseEvent<HTMLElement>) => {
    if (onToggle) return onToggle(e);

    const { accordion } = domRequirements();
    const isExpanded = accordion.hasAttribute('open');
    const { expanding, shrinking } = animationStatus.current;
    if (shrinking || !isExpanded) {
      animateAccordionByStatus(true);
    } else if (expanding || isExpanded) {
      animateAccordionByStatus(false);
    }
  };

  const animateAccordionByStatus = (isOpen: boolean) => {
    const { accordion, content } = domRequirements();
    const currentHeight = content.offsetHeight;
    if (isOpen) {
      // NOTE: safari에서 Body div(height=0) 일때, 자식의 offsetHeight을 0으로 계산하는 이슈 대응
      accordion.setAttribute('open', 'true');
      content.style.height = 'auto';
      const finalHeight = content.scrollHeight;
      content.style.height = `${currentHeight}px`;
      setAccordionAnimation('expanding', currentHeight, finalHeight);
    } else {
      setAccordionAnimation('shrinking', currentHeight, 0);
    }
    animateIconByStatus(isOpen);
  };

  const setAccordionAnimation = (status: AnimateStatus, start: number, end: number) => {
    const { accordion, content } = domRequirements();
    if (status == 'expanding') {
      if (accordion.classList.contains('expanded')) return;
      accordion.classList.add('expanded');
    } else {
      accordion.classList.remove('expanded');
    }

    animationStatus.current[status] = true;
    if (accordionAnimationRef.current) accordionAnimationRef.current.cancel();
    accordionAnimationRef.current = content.animate(
      {
        height: [`${start}px`, `${end}px`],
      },
      { duration, easing },
    );

    accordionAnimationRef.current.onfinish = () => onAccordionAnimationFinish(status);
    accordionAnimationRef.current.oncancel = () => {
      animationStatus.current[status] = false;
    };
  };

  const onAccordionAnimationFinish = (status: AnimateStatus) => {
    const { accordion, content } = domRequirements();

    /** NOTE: details 의 자식 중 summary 이외는 DOM에서 즉각적으로 숨기기 때문에,
     * 닫을 때는 애니메이션이 완전히 끝난 후 open 상태값을 변경해야 함 */
    accordion.open = status === 'expanding';

    // NOTE: height을 auto로 변경하여, screen resizing 대응
    if (status === 'expanding') content.style.height = 'auto';
    else content.style.height = '0px';

    // clear
    accordionAnimationRef.current = null;
    animationStatus.current.shrinking = false;
    animationStatus.current.expanding = false;
  };

  function animateIconByStatus(isOpen: boolean) {
    const iconAnimation = iconAnimationRef.current;
    if (!iconAnimation) return;
    iconAnimation.pause();
    iconAnimation.updatePlaybackRate(isOpen ? 1 : -1);
    iconAnimation.play();
  }

  const setIconAnimation = (keyframes: Keyframe[], icon: HTMLDivElement): void => {
    const iconAnimation = icon.animate(keyframes, {
      easing,
      duration,
      fill: 'forwards',
    });
    iconAnimation.pause();
    if (initialOpen) iconAnimation.finish();
    iconAnimationRef.current = iconAnimation;
  };

  const getAccordionTitleProps = () => {
    return {
      id: titleId,
      'aria-controls': contentId,
    };
  };
  const getAccordionBodyProps = () => {
    return {
      id: contentId,
      'aria-labelledby': titleId,
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
    <AccordionContext.Provider
      value={{
        ...value,
        contentRef,
        getAccordionBodyProps,
        getAccordionTitleProps,
        variant,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextReturnType => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('The sub-components of the Accordion component must be used within a Accordion component.');

  return context;
};
