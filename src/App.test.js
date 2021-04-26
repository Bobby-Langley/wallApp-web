import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Navbar in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/a/i);
  expect(linkElement).toBeInTheDocument();
});