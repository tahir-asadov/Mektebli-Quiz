import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './index.js';

it('Renders Footer component properly', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const re = new RegExp(currentYear);
  const footerElement = screen.getByText(re);
  expect(footerElement).toBeInTheDocument();
});