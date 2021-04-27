import { render, screen } from '@testing-library/react';
import App from './App';

it("renders without crashing", () => {
  shallow(<App />);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bobby/i);
  expect(linkElement).toBeInTheDocument();
});


describe('App', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
  });
});

describe('App', () => {
  it('should be able to run tests', () => {
      expect(1 + 2).toEqual(3);
  });
});