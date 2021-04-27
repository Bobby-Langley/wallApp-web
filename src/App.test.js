import { render, screen } from '@testing-library/react';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';

test(`canary`, () => {
  expect(true).toBe(true);
})

test("renders the correct content", () => {
  const root = document.createElement("div")
  ReactDOM.render(<App />, root)

  expect(root.querySelector("Footer")).toHaveTextContent.toBe("Bobby")
})

