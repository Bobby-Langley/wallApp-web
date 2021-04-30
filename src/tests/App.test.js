import { render, screen } from '@testing-library/react';
import React from 'react'
import * as ReactDOM from 'react-dom'
import App from '../App';


window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Login link in nav', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Sign Up link in nav', () => {
  render(<App />);
  expect(screen.getByText("Sign Up")).toBeVisible()
});






