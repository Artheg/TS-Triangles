import React, { Component } from "react";
import { HorizontalFlexContainer } from '../components/custom/Styled';
import Input from '../components/tradeshift/Input';
import Button from '../components/tradeshift/Button';
import Board from '../components/tradeshift/Board';

export default class TriangleTest extends Component {
    render() {
        return (
            <HorizontalFlexContainer>
                <Board>
                    <p>Enter triangle sides</p>
                    <Input type="number" label="A" />
                    <Input type="number" label="B" />
                    <Input type="number" label="C" />
                    <Button label="Check Triangle"></Button>
                </Board>

                <Board>
                    <p>Result will be displayed here</p>
                </Board>
            </HorizontalFlexContainer>
        );
    }
}
