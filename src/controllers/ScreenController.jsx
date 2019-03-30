import React, { Component } from "react";

export default class ScreenController extends Component {
    render() {
        return (
            <div data-ts="Board">
                <div data-ts="Panel">{this.props.children}</div>
            </div>
        );
    }
}
