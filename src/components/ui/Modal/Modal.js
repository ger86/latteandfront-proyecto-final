import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody} from './styledComponents';

const modalContainer = document.querySelector('#modalContainer');

export default ({title, children, isOpened, onClose}) =>
  isOpened
    ? ReactDOM.createPortal(
        <Modal tabIndex="-1" role="dialog">
          <ModalDialog role="document">
            <ModalContent>
              <ModalHeader>
                <h5 className="modal-title">{title}</h5>
                <button onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </ModalContent>
          </ModalDialog>
        </Modal>,
        modalContainer
      )
    : null;
