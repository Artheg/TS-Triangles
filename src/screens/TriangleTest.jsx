import React, { Component } from "react";
import { HorizontalFlexContainer } from "../components/custom/Styled";
import Input from "../components/tradeshift/Input";
import Button from "../components/tradeshift/Button";
import Board from "../components/tradeshift/Board";
import * as TriangleCheck from "../helpers/TriangleChecks";
import * as SideID from "../const/SideID";

export default class TriangleTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick(e) {
    const a = parseFloat(this.state[SideID.A]);
    const b = parseFloat(this.state[SideID.B]);
    const c = parseFloat(this.state[SideID.C]);

    if (!TriangleCheck.isValid(a, b, c)) this.setResult("Invalid triangle");
    else if (TriangleCheck.isEquilateral(a, b, c))
      this.setResult("Triangle is Equilateral");
    else if (TriangleCheck.isIsosceles(a, b, c))
      this.setResult("Triangle is Isosceles");
    else if (TriangleCheck.isScalene(a, b, c))
      this.setResult("Triangle is Scalene");
    else this.setResult("Unknown type of triangle");
  }

  onInputChange(id, event) {
    this.setState({
      [id]: event.target.value
    });
    this.setResult("");
  }

  setResult(result) {
    this.setState({
      result: result
    });
  }

  render() {
    return (
      <HorizontalFlexContainer>
        <Board>
          <p>Enter triangle sides</p>
          <Input
            type="number"
            label={SideID.A}
            onChange={this.onInputChange.bind(this, SideID.A)}
          />
          <Input
            type="number"
            label={SideID.B}
            onChange={this.onInputChange.bind(this, SideID.B)}
          />
          <Input
            type="number"
            label={SideID.C}
            onChange={this.onInputChange.bind(this, SideID.C)}
          />

          <Button
            label="Check triangle type"
            onClick={this.onButtonClick.bind(this)}
          />
        </Board>

        <Board>
          <p>Result will be displayed here</p>
          <em>{this.state.result}</em>
        </Board>
      </HorizontalFlexContainer>
    );
  }
}
