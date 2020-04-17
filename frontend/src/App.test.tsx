import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page with navbar', () => {
  const { getByText } = render(<App />);
  let linkElement = getByText(/Actual/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Rio de Janeiro/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Los Angeles/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Miami/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Londres/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/San Petersburgo/i);
  expect(linkElement).toBeInTheDocument();
});
