import { render, screen, fireEvent } from '@testing-library/react';
import Login from './index.js';

it('Renders Login component properly', () => {
  render(<Login />);
  const submitButton = screen.getByTestId(/submit-button/i);
  expect(submitButton).toBeInTheDocument();
});

it('Can update username', () => {
  render(<Login />);
  const username = screen.getByTestId(/username/i);
  fireEvent.change(username, {target: {value: 'reactuser'}})
  expect(username.value).toBe('reactuser');
});

it('Can update password', () => {
  render(<Login />);
  const password = screen.getByTestId(/password/i);
  fireEvent.change(password, {target: {value: 'reactuser'}})
  expect(password.value).toBe('reactuser');
});
