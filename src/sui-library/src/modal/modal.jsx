import React from "react";
import IconClose from "../icons/iconClose.jsx";
import "./modal.css";

const Modal = ({ className, onClose, show, width, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={`modal ${!!show && "modalShow"} ${className}`}>
      <div className="modalContent" style={{ width: `${width}px` }}>
        <div className="modalContent__icon">
          <IconClose onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClose: () => {},
  className: "",
};

export default Modal;
