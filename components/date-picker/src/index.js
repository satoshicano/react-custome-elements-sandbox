import { render } from "react-dom";
import React from "react";
import App from "./App";

class DatePicker extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_attrName, _old, _new) {
    console.log("attributeChangedCallback");
    this.render();
  }

  render() {
    render(<App />, this);
  }
}

window.customElements.define("date-picker", DatePicker);
