import React, { Component } from "react";

export default class InputField extends Component {
  render() {
    return (
      <form data-ts="Form">
        <fieldset>
          <label>
            <span>{this.props.label}</span>
            <input
              type={this.props.type}
              required
              onChange={this.props.onChange}
            />
          </label>
        </fieldset>
      </form>
    );
  }
}
