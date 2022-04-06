import React, { FC } from "react";
import "./Modal.scss";

interface ModalInterface {
  modifier?: string;
}

const Modal: FC<ModalInterface> = ({ children, modifier }) => {
  const className = modifier ? `modal modal--${modifier}` : "modal";

  return <div className={className}>{children}</div>;
};

export default Modal;
