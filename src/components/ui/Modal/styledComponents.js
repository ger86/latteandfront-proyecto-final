import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
`;

export const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`;

export const ModalHeader = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`;

export const ModalBody = styled.div`
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`;
