import React from "react";
import { render } from "react-dom";

function listener(key, callback) {
  document.getElementsByTagName('body')[0].addEventListener(key, callback);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    }
  }

  componentDidMount() {
    listener('onChangeDate', (e) => {
      this.setState({ startDate: e.detail });
    })
  }

  render() {
    return (
      <date-picker selected={this.state.startDate.toString()} />
    );
  }
}

console.log("outside:", React.version);
render(<App />, document.querySelector("#app"));
