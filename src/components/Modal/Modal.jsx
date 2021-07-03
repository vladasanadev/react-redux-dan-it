import React, { Component } from "react";
import styles from "./Modal.css";
import Button from "../Button/Button";

export default function Modal({handler, header,text,actions}){
    return (
      <div onClick={handler} className="modal" id="simpleModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="closeBtn" onClick={handler}>
              &times;
            </span>
            <h2>{header}</h2>
          </div>
          <div className="modal-body">
            <p>{text}</p>
          </div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
    );
  
}
