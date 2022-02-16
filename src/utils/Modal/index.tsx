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

export function Modal({ isOpen, onClose, zIndex = 9999, children }: ModalProps): React.ReactElement | null {
  const portalId = useMemo(() => `loplat-ui-modal__${generateUniqueId()}`, []);
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    // create container
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);

    // add eventListeners
    function onKeyDownESC(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onKeyDownESC);

    // trigger rerender
    setContainer(newContainer);

    // remove container & eventListeners
    return () => {
      document.removeEventListener('keydown', onKeyDownESC);
      const containerDOM = document.getElementById(portalId) as HTMLDivElement;
      containerDOM.remove();
    };
  }, [portalId]);

  useEffect(() => {
    if (isOpen) {
      // prevent scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
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
  }
`;
