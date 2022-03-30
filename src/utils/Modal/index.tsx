import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Portal } from '../Portal';
import { generateUniqueId } from '../../functions/generator';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: React.ReactElement;
}

const TABBABLE_TAGS = ['a', 'input', 'select', 'button', 'textarea'];
const changeAccessibility = (root: HTMLElement, isAccessible: boolean) => {
  const tabIndex = isAccessible ? '0' : '-1';
  const ariaHidden = (!isAccessible).toString();

  root.setAttribute('aria-hidden', ariaHidden);
  root.setAttribute('aria-disabled', ariaHidden);
  for (const tabbableTag in TABBABLE_TAGS) {
    const elements = root.getElementsByTagName(tabbableTag);
    for (let i = 0; i < elements.length; i++) {
      elements[i].setAttribute('tabindex', tabIndex);
    }
  }
};

export function Modal({ isOpen, onClose, zIndex = 9999, children }: ModalProps): React.ReactElement | null {
  const portalId = useMemo(() => `loplat-ui-modal__${generateUniqueId()}`, []);
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);

    function onKeyDownESC(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDownESC);

    // trigger rerender
    setContainer(newContainer);

    return () => {
      document.removeEventListener('keydown', onKeyDownESC);
      const containerDOM = document.getElementById(portalId) as HTMLDivElement;
      containerDOM.remove();
    };
  }, [portalId]);

  useEffect(() => {
    // root div가 항상 body의 첫번째에 온다는 것을 전제로 상정함.
    const root = document.body.querySelector('div') as HTMLElement;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      changeAccessibility(root, false);
    }
    return () => {
      document.body.style.overflow = 'auto';
      changeAccessibility(root, true);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <Portal container={container}>
      <ModalWrapper zIndex={zIndex}>
        <div className="background" onClick={onClose} />
        <div className="content">{children}</div>
      </ModalWrapper>
    </Portal>
  );
}

const ModalWrapper = styled.div<Pick<ModalProps, 'zIndex'>>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};

  & > .background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  & > .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
