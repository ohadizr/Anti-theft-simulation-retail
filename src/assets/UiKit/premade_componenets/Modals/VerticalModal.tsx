import React, { useEffect, useState } from "react";
import "./VerticalModal.css";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
}


const Modal: React.FC<ModalProps>= ({ show, onHide, children }) => {
  const [isShown, setIsShown] = useState(show);

  const handleHide = () => {
    setIsShown(false);
    
    onHide();
  };

  return (
    <div className={`modal ${isShown ? "d-block" : "d-none"}`}>
      <div className="modal-background" onClick={handleHide}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

const CenteredModal: React.FC<ModalProps>= ({ show, onHide, children }) => {
  const [isShown, setIsShown] = useState(show);

  const handleHide = () => {
    setIsShown(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <div className="modal-dialog">
        <div className="modal-header">
          <button type="button" className="closeBtn" onClick={onHide}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </Modal>
  );
};

export default CenteredModal;
