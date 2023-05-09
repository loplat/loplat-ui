import { useEffect, useRef } from 'react';
import useAnimation from '../../functions/useAnimation';
import type { TransitionProps, AnimateStatus } from './types';
import { getTabbableElements } from '../../functions/getTabbableElements';

const DEFAULT_DURATION = 300;
const DEFAULT_ORIENTATION: TransitionProps['orientation'] = 'horizontal';
const DEFAULT_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const Collapse = ({
  children,
  isExpanded: initialOpen = true,
  onExpand,
  onExpandFinished,
  onCollapse,
  onCollapseFinished,
  orientation = DEFAULT_ORIENTATION,
  duration = DEFAULT_DURATION,
  easing = DEFAULT_EASING,
  collapsedSize = 0,
}: TransitionProps) => {
  const isMounted = useRef<boolean>(false);
  const collapseElementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const targetStyleKey = orientation === 'vertical' ? 'height' : 'width';

  useAnimation();
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const transition = getTargetNode();
      if (initialOpen) {
        // NOTE: initialOpen = true가 초기값일 경우, CLS가 생기지 않도록 하는 로직
        setExpandedStyle();
        transition.classList.add('expanded');
      } else {
        setShrinkStyle();
        transition.classList.add('collapsed');
        changeAccessibility(false);
      }
      toggleClassName(initialOpen ? 'expanding' : 'shrinking');
    } else {
      calculateElementSize(initialOpen);
    }
  }, [initialOpen, orientation]); // eslint-disable-line react-hooks/exhaustive-deps

  const getTargetNode = () => {
    const element = collapseElementRef.current;
    if (!element) throw new DOMException('NotFoundError');
    return element;
  };

  // NOTE: 애니메이션 현재 width/height와 최종 width/height값을 계산하여 전달하는 함수
  const calculateElementSize = (isOpen: boolean) => {
    const targetElem = getTargetNode();
    const currentHeight = targetElem.offsetHeight;
    const currentWidth = targetElem.offsetWidth;
    if (isOpen) {
      // NOTE: safari에서 Body div(height=0) 일때, 자식의 offsetHeight을 0으로 계산하는 이슈 대응
      setExpandedStyle();
      const finalHeight = targetElem.scrollHeight;
      const finalWidth = targetElem.scrollWidth;
      targetElem.style[targetStyleKey] = orientation === 'vertical' ? `${currentHeight}px` : `${currentWidth}px`;
      if (orientation === 'vertical') {
        setAnimation('expanding', currentHeight, finalHeight);
      } else {
        setAnimation('expanding', currentWidth, finalWidth);
      }
    } else {
      setAnimation('shrinking', orientation === 'vertical' ? currentHeight : currentWidth, collapsedSize);
    }
  };

  const setAnimation = (status: AnimateStatus, start: number, end: number) => {
    const targetElem = getTargetNode();

    toggleClassName(status);

    if (animationRef.current) animationRef.current.cancel();

    // NOTE: https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
    animationRef.current = targetElem.animate(
      {
        [targetStyleKey]: [`${start}px`, `${end}px`],
      },
      { duration, easing },
    );

    animationRef.current.onfinish = () => {
      onAnimationFinish(status);
    };
  };

  const toggleClassName = (status: AnimateStatus) => {
    const targetElem = getTargetNode();
    if (status == 'expanding') {
      targetElem.classList.add('expanded');
      targetElem.classList.remove('collapsed');
      onExpand && onExpand();
    } else {
      targetElem.classList.add('collapsed');
      targetElem.classList.remove('expanded');
      onCollapse && onCollapse();
    }
  };

  const onAnimationFinish = (status: AnimateStatus) => {
    const targetElem = getTargetNode();

    if (status === 'expanding') {
      setExpandedStyle();
      targetElem.classList.add('expanded');
      onExpandFinished && onExpandFinished();
      changeAccessibility(true);
    } else {
      setShrinkStyle();
      targetElem.classList.add('collapsed');
      onCollapseFinished && onCollapseFinished();
      changeAccessibility(false);
    }

    // clear
    animationRef.current = null;
  };

  const setExpandedStyle = () => {
    const targetElem = getTargetNode();
    // NOTE:
    // - height: auto로 변경하여, screen resizing 대응.
    // - width: full width 방지
    targetElem.style[targetStyleKey] = targetStyleKey === 'height' ? 'auto' : 'fit-content';
  };

  const setShrinkStyle = () => {
    const targetElem = getTargetNode();
    targetElem.style[targetStyleKey] = `${collapsedSize}px`;
  };

  const changeAccessibility = (isOpen: boolean) => {
    const element = collapseElementRef.current;
    if (!element) return;
    const tabbableTagList = getTabbableElements(element);
    tabbableTagList.forEach((node) => {
      if (isOpen) node.setAttribute('tabindex', '1');
      else node.setAttribute('tabindex', '-1');
    });
  };

  return (
    <div ref={collapseElementRef} style={{ overflow: 'hidden', display: 'flex' }}>
      {children}
    </div>
  );
};
