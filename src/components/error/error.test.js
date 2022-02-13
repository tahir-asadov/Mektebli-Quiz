import { render, screen } from '@testing-library/react';
import Error from './index.js';

it('Renders Error component properly', () => {
  render(<Error error="Error occured" />);
  const errorText = screen.getByText(/error occured/i);
  expect(errorText).toBeInTheDocument();
});