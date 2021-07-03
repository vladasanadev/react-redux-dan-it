import React, { Component } from "react";
import styles from "./Button.css";

 function Button({ text, backgroundColor, modalHandler, dataID } ) {

    return (
      <div>
        <button
          id={dataID}
          style={{ backgroundColor: backgroundColor }}
          onClick={modalHandler}
        >
          {text}
        </button>
      </div>
    );
  
}
export default Button;