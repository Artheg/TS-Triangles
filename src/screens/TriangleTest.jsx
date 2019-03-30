import React, { Component } from "react";
import { HorizontalFlexContainer } from "../components/custom/Styled";
import Input from "../components/tradeshift/Input";
import Button from "../components/tradeshift/Button";
import Board from "../components/tradeshift/Board";
import * as Checks from "../Checks";

// const inputA;
// const inputB;
// const inputC;
export default class TriangleTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick(e) {
    const a = parseFloat(this.state["inputA"]);
    const b = parseFloat(this.state["inputB"]);
    const c = parseFloat(this.state["inputC"]);

    if (!Checks.isValid(a, b, c)) 
      this.setResult("Invalid triangle");
    else if (Checks.isEquilateral(a, b, c)) 
      this.setResult("Triangle is Equilateral");
    else if (Checks.isIsosceles(a, b, c)) 
      this.setResult("Triangle is Isosceles");
    else if (Checks.isScalene(a, b, c)) 
      this.setResult("Triangle is Scalene");
    else 
      this.setResult("Unknown type of triangle");
  }

  onInputChange(id, event) {
    this.setState({
      [id]: event.target.value
    });
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
            label="A"
            onChange={this.onInputChange.bind(this, "inputA")}
          />
          <Input
            type="number"
            label="B"
            onChange={this.onInputChange.bind(this, "inputB")}
          />
          <Input
            type="number"
            label="C"
            onChange={this.onInputChange.bind(this, "inputC")}
          />

          <Button
            label="Check Triangle"
            onClick={this.onButtonClick.bind(this)}
          />
        </Board>

        <Board>
          <p>Result will be displayed here</p>
          <h3>{this.state.result}</h3>
        </Board>
      </HorizontalFlexContainer>
    );
  }
}
