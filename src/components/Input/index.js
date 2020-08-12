import React, { Component } from "react";

// CSS
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { value, name } }) {
    this.props.callback(name, value);
  }

  render() {
    const { type, name, value } = this.props;
    return (
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={this.handlerInput}
      />
    );
  }
}

export default Input;
