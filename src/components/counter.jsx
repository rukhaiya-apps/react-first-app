import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return React.createElement(
      "div",
      { className: "counter-container" },
      React.createElement("h1", null, `Count: ${this.state.count}`),
      React.createElement(
        "button",
        { className: "counter-button-inc", onClick: this.increment },
        "Increment"
      ),
      React.createElement(
        "button",
        { className: "counter-button-dec", onClick: this.decrement },
        "Decrement"
      )
    );
  }
}

export default Counter;
