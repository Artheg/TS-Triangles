import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        data-ts="Button"
        className="ts-primary"
        onClick={this.props.onClick}
      >
        <span>{this.props.label}</span>
      </button>
    );
  }
}
