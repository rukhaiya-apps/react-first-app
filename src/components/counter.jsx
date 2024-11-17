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
      null,
      React.createElement("h1", null, `Count: ${this.state.count}`),
      React.createElement(
        "button",
        { onClick: this.increment, style: { marginRight: "10px" } },
        "Increment"
      ),
      React.createElement("button", { onClick: this.decrement }, "Decrement")
    );
  }
}

export default Counter;
