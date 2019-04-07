import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(React.version);
  }

  render() {
    return (
      <div>
        <date-picker />
      </div>
    );
  }
}

render(<App />, document.querySelector("#app"));
