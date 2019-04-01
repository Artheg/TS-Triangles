import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import TriangleTypeCheckScreen from '../screens/TriangleTypeCheckScreen';
import * as TestId from '../const/TestId';
import * as Text from '../mock/Text';

test('User should enter triangle sides and get a result', () => {

    const { getByTestId } = render(<TriangleTypeCheckScreen />);

    const inputA = getByTestId(TestId.inputA);
    const inputB = getByTestId(TestId.inputB);
    const inputC = getByTestId(TestId.inputC);

    const button = getByTestId(TestId.checkResultBtn);
    const result = getByTestId(TestId.result);

    expect(result.textContent).toBe('');

    fireEvent.change(inputA, { target: { value: 2 } });
    fireEvent.change(inputB, { target: { value: 3 } });
    fireEvent.change(inputC, { target: { value: 4 } });

    fireEvent.click(button);
    
    expect(result.textContent).toBe(Text.data['scalene']);
});