import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { ModalContainer } from "./styled";

const Modal = ({ children, top, id }) => {
  const isShowing = useSelector(state => state.modal.isShowing);
  let modal;

  isShowing.forEach(mod => {
    if (mod.data && id === mod.id) {
      modal = <ModalContainer top={top ? true : false}>{children}</ModalContainer>;
    }
  });

  return isShowing.length ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
