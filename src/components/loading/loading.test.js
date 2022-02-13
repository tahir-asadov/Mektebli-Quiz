import { render, screen } from '@testing-library/react';
import Loading from './index.js';

it('Renders Loading component properly', () => {
  render(<Loading message="Loading..." />);
  const loadingText = screen.getByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});