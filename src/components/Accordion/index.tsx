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
    }, []);

    const cancelAnimation = useCallback(() => {
      const { name, running } = animationStatus.current;
      if (!running) return;
      timers.current[name].forEach((timer) => clearTimeout(timer));
    }, []);

    const expanding: (onMount: boolean) => AnimateFunction = useCallback(
      (onMount = false) =>
        (body, content, timer) => {
          // NOTE: open:true를 초기설정으로 줄 때 CLS가 생기지 않도록 하는 로직
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
            // NOTE: safari의 div(height:0) 안의 div의 offsetHeight을 0으로 계산하는 이슈 대응
            if (isNeededToCalcHeight) {
              body.style.height = 'auto';
              contentHeight.current = content.offsetHeight;
              body.style.height = '0px';
            }
            timer.expand[0] = setTimeout(() => (body.style.height = `${contentHeight.current}px`), 10);
          }, 5);

          timer.expand[1] = setTimeout(() => {
            // NOTE: 다 펼쳐지고 나서 height: auto로 바꿔줘야 펼침상태에서 Responsive하게 height을 반영할 수 있다.
            body.style.height = 'auto';
            setAnimationStatus('expand', false);
          }, duration);
        },
      [],
    );

    const shirking: AnimateFunction = useCallback((body, content, timer) => {
      setAnimationStatus('shrink', true);
      body.style.height = `${content.offsetHeight}px`;
      contentHeight.current = content.offsetHeight;

      timer.shrink[0] = setTimeout(() => (body.style.height = '0px'), 10);
      timer.shrink[1] = setTimeout(() => {
        // NOTE: open 상태는 나중에 바뀌어야함. summary 이외 노드의 visibility 상태가 dom에서 자동으로 변경되기 때문
        setIsOpen(false);
        setAnimationStatus('shrink', false);
      }, duration);
    }, []);

    const toggleAnimation = useCallback((shouldExpand: boolean) => {
      const body = bodyRef.current as HTMLDivElement;
      const content = contentRef.current as HTMLDivElement;
      const timer = timers.current as Timers;

      cancelAnimation();
      if (shouldExpand) expanding(false)(body, content, timer);
      else shirking(body, content, timer);
    }, []);

    const setAnimationStatus = useCallback((name: AnimationName, state: boolean) => {
      animationStatus.current.name = name;
      animationStatus.current.running = state;
    }, []);

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
          {/* NOTE: safari 구버젼에서 summary에 flex가 안먹히는 버그 */}
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
