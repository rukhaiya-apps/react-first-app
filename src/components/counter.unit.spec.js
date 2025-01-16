import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter Component', () => {
  it('should render the initial value provided in props', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    expect(getByText('Count: 5')).toBeInTheDocument();
  });

  it('should increment the displayed value when the "Increment" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText('Increment');

    fireEvent.click(incrementButton);

    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  it('should decrement the displayed value when the "Decrement" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const decrementButton = getByText('Decrement');

    fireEvent.click(decrementButton);

    expect(getByText('Count: -1')).toBeInTheDocument();
  });
});
