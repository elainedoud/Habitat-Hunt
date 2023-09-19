import { render, screen } from '@testing-library/react';
import App from './App';

test('shows title page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Habitat Hunt/i);
  expect(linkElement).toBeInTheDocument();
});

