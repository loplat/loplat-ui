import React from 'react';
import ReactDOM from 'react-dom';

export interface Props {
  children: React.ReactElement;
  container: Element | null;
}

export function Portal({ children, container }: Props): React.ReactPortal | null {
  if (!container) return null;
  return ReactDOM.createPortal(children, container);
}
