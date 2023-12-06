// Modal.tsx
import React from "react";

interface ModalProps {
  content: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={closeModal} className="modal-close-button">
          Close Modal
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
