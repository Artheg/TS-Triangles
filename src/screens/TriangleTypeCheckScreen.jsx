import React, { Component } from 'react';
import { HorizontalFlexContainer } from '../components/custom/Styled';
import Input from '../components/tradeshift/Input';
import Button from '../components/tradeshift/Button';
import Board from '../components/tradeshift/Board';
import * as TriangleCheck from '../helpers/TriangleTypeCheckers';
import * as SideId from '../const/SideId';
import * as TestId from '../const/TestId';
import * as Text from '../mock/Text';

export default class TriangleTypeCheckScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick(e) {
    const a = parseFloat(this.state[SideId.A]);
    const b = parseFloat(this.state[SideId.B]);
    const c = parseFloat(this.state[SideId.C]);

    if (!TriangleCheck.isValid(a, b, c)) this.setResult(Text.data['invalid']);
    else if (TriangleCheck.isEquilateral(a, b, c))
      this.setResult(Text.data['equilateral']);
    else if (TriangleCheck.isIsosceles(a, b, c))
      this.setResult(Text.data['isosceles']);
    else if (TriangleCheck.isScalene(a, b, c))
      this.setResult(Text.data['scalene']);
    else this.setResult(Text.data['unknown']);
  }

  onInputChange(id, event) {
    this.setState({
      [id]: event.target.value
    });
    this.setResult('');
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
            testId={TestId.inputA}
            type="number"
            label={SideId.A}
            onChange={this.onInputChange.bind(this, SideId.A)}
          />
          <Input
            testId={TestId.inputB}
            type="number"
            label={SideId.B}
            onChange={this.onInputChange.bind(this, SideId.B)}
          />
          <Input
            testId={TestId.inputC}
            type="number"
            label={SideId.C}
            onChange={this.onInputChange.bind(this, SideId.C)}
          />

          <Button testId={TestId.checkResultBtn}
            label="Check triangle type"
            onClick={this.onButtonClick.bind(this)}
          />
        </Board>

        <Board>
          <p>Result will be displayed here</p>
          <em data-testid={TestId.result}>{this.state.result}</em>
        </Board>
      </HorizontalFlexContainer>
    );
  }
}
