import React from "react";
import { ReactDOM } from "react";
import "./Backdrop.css";

function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdroop-hook")
  );
}

export default Backdrop;
