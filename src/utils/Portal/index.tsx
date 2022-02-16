import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactElement;
  container: Element | null;
}

export function Portal({ children, container }: PortalProps): React.ReactPortal | null {
  if (!container) return null;
  return ReactDOM.createPortal(children, container);
}
