import { render, screen } from '@testing-library/react';
import Items from './index'

test('renders heading text', () => {
  render(<Items />);
  const heading = screen.getByText(/Shop Online/i);
  expect(heading).toBeInTheDocument();
});
