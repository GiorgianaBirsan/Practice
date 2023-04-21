import React from "react";
import ReactDOM from "react-dom";
import {Button} from "../Button";
import "./Modal.css";

export default function Modal({open, children, onClose}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="modal_container">
      <div className="modal_content">
        <button id="close_modal_btn" children="X" onClick={onClose} />

        {children}
      </div>
    </div>,
    document.getElementById("modals")
  );
}
