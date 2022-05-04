import React, { useState, useCallback, useRef } from 'react';
import { AccordionProps, DetailsProps, AnimationStatus, AnimateFunction, Timers, AnimationName } from './types';
import { ChevronDownIcon } from '../../assets/Icon';
import { Body, Heading, Details, Summary } from './styles';

export const Accordion = React.memo(
  ({
    title,
    content,
    open = false,
    onToggle,
    type = 'fill',
    headingLevel = 'h3',
    duration = 300,
    iconSuffix,
    ...props
  }: AccordionProps & DetailsProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(open);
    const [expanded, setExpanded] = useState(open);
    const timers = useRef<Timers>({ expand: [], shrink: [] });
    const animationStatus = useRef<AnimationStatus>({ name: 'expand', running: false });
    const contentHeight = useRef<number>(0);

    React.useEffect(() => {
      if (open) {
        expanding(true)(bodyRef.current as HTMLDivElement, contentRef.current as HTMLDivElement, timers.current);
        contentHeight.current = contentRef.current?.offsetHeight ?? 0;
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const cancelAnimation = useCallback(() => {
      const { name, running } = animationStatus.current;
      if (!running) return;
      timers.current[name].forEach((timer) => clearTimeout(timer));
    }, []);

    const setAnimationStatus = useCallback((name: AnimationName, state: boolean) => {
      animationStatus.current.name = name;
      animationStatus.current.running = state;
    }, []);

    const expanding: (onMount: boolean) => AnimateFunction = useCallback(
      (onMount = false) =>
        (body, content, timer) => {
          // NOTE: open=true가 초기값일 경우, CLS가 생기지 않도록 하는 로직
          if (onMount) {
            body.style.height = 'auto';
            setAnimationStatus('expand', false);
            contentHeight.current = content.offsetHeight;
            return;
          }

          let isNeededToCalcHeight = true;
          const { name: beforeAnimationName, running } = animationStatus.current;
          if (running && beforeAnimationName === 'shrink') isNeededToCalcHeight = false;
          if (contentHeight.current === 0) isNeededToCalcHeight = true;

          setIsOpen(true);
          setAnimationStatus('expand', true);

          setTimeout(() => {
            // NOTE: safari에서 Body div(height=0)의 자식인 Content div의 offsetHeight을 0으로 계산하는 이슈 대응
            if (isNeededToCalcHeight) {
              body.style.height = 'auto';
              contentHeight.current = content.offsetHeight;
              body.style.height = '0px';
            }
            timer.expand[0] = setTimeout(() => (body.style.height = `${contentHeight.current}px`), 10);
          }, 5);

          timer.expand[1] = setTimeout(() => {
            // NOTE: 펼쳐지고나면 height을 'auto'로 바꾸어 resizing 대응
            body.style.height = 'auto';
            setAnimationStatus('expand', false);
          }, duration);
        },
      [duration, setAnimationStatus],
    );

    const shirking: AnimateFunction = useCallback(
      (body, content, timer) => {
        setAnimationStatus('shrink', true);
        body.style.height = `${content.offsetHeight}px`;
        contentHeight.current = content.offsetHeight;

        timer.shrink[0] = setTimeout(() => (body.style.height = '0px'), 10);
        timer.shrink[1] = setTimeout(() => {
          // NOTE: summary 이외 노드의 visibility가 DOM에서 자동으로 변경되기 때문에, open 상태값은 나중에 바뀌어야한다.
          setIsOpen(false);
          setAnimationStatus('shrink', false);
        }, duration);
      },
      [duration, setAnimationStatus],
    );

    const toggleAnimation = useCallback(
      (shouldExpand: boolean) => {
        const body = bodyRef.current as HTMLDivElement;
        const content = contentRef.current as HTMLDivElement;
        const timer = timers.current as Timers;

        cancelAnimation();
        if (shouldExpand) expanding(false)(body, content, timer);
        else shirking(body, content, timer);
      },
      [cancelAnimation, expanding, shirking],
    );

    const toggle = () => {
      setExpanded((prev) => !prev);
      toggleAnimation(!expanded);
    };

    return (
      <Details open={isOpen} expanded={expanded} type={type} duration={duration} {...props}>
        <Summary
          onClick={(e) => {
            e.preventDefault();
            if (onToggle) {
              setExpanded(!open);
              toggleAnimation(!open);
              onToggle(e);
            } else {
              toggle();
            }
          }}
        >
          {/* NOTE: safari 구버전에서 summary tag에 flex가 적용되지 않는 버그 대응 */}
          <div>
            <Heading as={headingLevel}>{title}</Heading>
            <ChevronDownIcon size={12} suffixForId={iconSuffix} />
          </div>
        </Summary>
        <Body role="region" ref={bodyRef}>
          <div ref={contentRef}>{content}</div>
        </Body>
      </Details>
    );
  },
);
