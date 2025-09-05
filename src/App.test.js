import { render, screen } from '@testing-library/react';

import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headerElement = screen.getByText(/welcome to react/i);
  expect(headerElement).toBeInTheDocument();
});
