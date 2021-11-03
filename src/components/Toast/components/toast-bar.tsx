import * as React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Toast, ToastPosition, resolveValue, Renderable, ColorSet } from '../core/types';
import { ToastIcon } from './toast-icon';
import { generateColorSet, prefersReducedMotion } from '../core/utils';
import { CloseIcon } from '../../../assets/Icon';
import { ActionType, dispatch } from '../core/store';

const enterAnimation = (factor: number) => `
  0% {
    transform: translate3d(0, ${factor * -200}%, 0) scale(0.6);
    opacity: 0.5;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
`;

const exitAnimation = (factor: number) => `
  0% {
    transform: translate3d(0, 0, -1px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, ${factor * -150}%, -1px) scale(0.6);
    opacity: 0;
  }
`;

const fadeInAnimation = `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOutAnimation = `
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ToastBarBase = styled.div(
  {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minWidth: '20.5rem',
    minHeight: '3.375rem',
    boxSizing: 'border-box',
    willChange: 'transform',
    boxShadow: '0 2px 6px 0 rgba(209, 209, 209, 0.3)',
    pointerEvents: 'auto',
    padding: '0.938rem',
    borderRadius: '4px',
    fontSize: '1rem',
    lineHeight: '28px',
  },
  (props: ColorSet) => ({
    border: `1px solid ${props.borderColor}`,
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  }),
);

const Message = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  margin: 0 16px;
  color: inherit;
  word-break: break-all;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

interface ToastBarProps {
  toast: Toast;
  position?: ToastPosition;
  style?: React.CSSProperties;
  children?: (components: { icon: Renderable; message: Renderable }) => Renderable;
}

const getAnimationStyle = (position: ToastPosition, visible: boolean): React.CSSProperties => {
  const top = position.includes('top');
  const factor = top ? 1 : -1;

  const [enter, exit] = prefersReducedMotion()
    ? [fadeInAnimation, fadeOutAnimation]
    : [enterAnimation(factor), exitAnimation(factor)];

  return {
    animation: visible
      ? `${keyframes(enter)} 0.6s cubic-bezier(.21,1.02,.73,1) forwards`
      : `${keyframes(exit)} 0.2s forwards cubic-bezier(.06,.71,.55,1)`,
  };
};

export const ToastBar: React.FC<ToastBarProps> = React.memo(({ toast, position, style, children }) => {
  const animationStyle: React.CSSProperties = toast?.height
    ? getAnimationStyle(toast.position || position || 'top-center', toast.visible)
    : { opacity: 0 };

  const icon = <ToastIcon toast={toast} />;
  const message = <Message {...toast.ariaProps}>{resolveValue(toast.message, toast)}</Message>;
  const colorSet = generateColorSet(toast.type);

  return (
    <ToastBarBase
      className={toast.className}
      style={{
        ...animationStyle,
        ...style,
        ...toast.style,
      }}
      {...colorSet}
    >
      {typeof children === 'function' ? (
        children({
          icon,
          message,
        })
      ) : (
        <>
          {icon}
          {message}
          <CloseButton
            onClick={() => {
              dispatch({
                type: ActionType.REMOVE_TOAST,
                toastId: toast.id,
              });
            }}
          >
            <CloseIcon size={18} fillColor={colorSet.iconColor} />
          </CloseButton>
        </>
      )}
    </ToastBarBase>
  );
});
