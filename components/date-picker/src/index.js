import { render } from "react-dom";
import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function dispatcher(key, value) {
  const event = new CustomEvent(key, { detail: value });
  document.getElementsByTagName('body')[0].dispatchEvent(event);
}

class DatePicker extends HTMLElement {
  static get observedAttributes() {
    return ["selected"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_attrName, _old, _new) {
    if (_old === _new) {
      return;
    }
    console.log("attributeChanged", _attrName);
    this.render();
  }

  render() {
    const selected = this.getAttribute('selected');
    render(<ReactDatePicker selected={new Date(selected)} onChange={(date) => dispatcher('onChangeDate', date)} />, this)
  }
}

console.log("inside:", React.version);
window.customElements.define("date-picker", DatePicker);
