import React from 'react';
import { Modal } from '../../utils';
import { Popup1 as PopupOne } from './Popup1';
import { Popup2 as PopupTwo } from './Popup2';
import { Popup3 as PopupThree } from './Popup3';
import { DialogProps, Popup1Props, Popup2Props, Popup3Props } from './core/types';

export const Popup1 = ({ isOpen, onClose, ...props }: DialogProps & Popup1Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupOne {...props} onClose={onClose} />
    </Modal>
  );
};

export const Popup2 = ({ isOpen, onClose, ...props }: DialogProps & Popup2Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupTwo {...props} />
    </Modal>
  );
};

export const Popup3 = ({ isOpen, onClose, ...props }: DialogProps & Popup3Props): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PopupThree {...props} onClose={onClose} />
    </Modal>
  );
};
