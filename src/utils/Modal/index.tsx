import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Portal } from '../Portal';
import { generateUniqueId } from '../../functions/uniqueId';
import { modalZIndex } from '../../core';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: React.ReactElement;
}

const TABBABLE_TAGS = ['a', 'input', 'select', 'button', 'textarea', 'details'];
const changeAccessibility = (root: HTMLElement, modalStatus: 'open' | 'close') => {
  if (modalStatus === 'open') {
    root.setAttribute('aria-hidden', 'true');
    root.setAttribute('aria-disabled', 'true');
  } else {
    root.removeAttribute('aria-hidden');
    root.removeAttribute('aria-disabled');
  }

  const tabbableTagList = root.querySelectorAll(TABBABLE_TAGS.join(', '));
  tabbableTagList.forEach((node) => {
    if (modalStatus === 'open') node.setAttribute('tabindex', '-1');
    else node.removeAttribute('tabindex');
  });
};

export function Modal({ isOpen, onClose, zIndex = modalZIndex, children }: ModalProps): React.ReactElement | null {
  const portalId = useMemo(() => `loplat-ui-modal_${generateUniqueId()}`, []);
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', portalId);
    document.body.appendChild(newContainer);

    function onKeyDownESC(e: KeyboardEvent) {
      if (e.code === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDownESC);

    // trigger rerender
    setContainer(newContainer);

    return () => {
      document.removeEventListener('keydown', onKeyDownESC);
      const containerDOM = document.getElementById(portalId) as HTMLDivElement;
      containerDOM.remove();
    };
  }, [onClose, portalId]);

  useEffect(() => {
    const divList = document.querySelectorAll<HTMLDivElement>('body > div');
    const portal = document.querySelector(`body > div#${portalId}`) as HTMLDivElement;

    const notPortalDivList: HTMLDivElement[] = [];
    divList.forEach((div) => {
      if (!portal.contains(div)) notPortalDivList.push(div);
    });

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      notPortalDivList.forEach((root) => changeAccessibility(root, 'open'));
    }
    return () => {
      document.body.style.overflow = 'initial';
      notPortalDivList.forEach((root) => changeAccessibility(root, 'close'));
    };
  }, [isOpen, portalId]);

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
