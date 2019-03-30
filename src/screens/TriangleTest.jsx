import React, { Component } from "react";
import { HorizontalFlexContainer } from '../components/custom/Styled';
import Input from '../components/tradeshift/Input';
import Button from '../components/tradeshift/Button';
import Board from '../components/tradeshift/Board';

// const inputA;
// const inputB;
// const inputC;
export default class TriangleTest extends Component {
    render() {

        const inputA = React.createElement(Input, { type: "number", label: "A" });
        const inputB = React.createElement(Input, { type: "number", label: "B" });
        const inputC = React.createElement(Input, { type: "number", label: "C" });

        const onButtonClick = (e) => {
            console.log(e);
        };

        return (
            <HorizontalFlexContainer>
                <Board>
                    <p>Enter triangle sides</p>
                    {inputA}
                    {inputB}
                    {inputC}
                    <Button label="Check Triangle" onClick={onButtonClick}></Button>
                </Board>

                <Board>
                    <p>Result will be displayed here</p>
                </Board>
            </HorizontalFlexContainer>
        );
    }
}

