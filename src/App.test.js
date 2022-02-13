import { render, screen } from '@testing-library/react';
import App from './App';

it('Renders Login component for not logged in users', () => {
  render(<App />);
  const submitButton = screen.getByTestId(/submit-button/i);
  expect(submitButton).toBeInTheDocument();
});
