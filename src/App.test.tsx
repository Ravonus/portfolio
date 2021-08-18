/**
 * @author Chad Koslovsky
 * @email Chad@BioFi.Tech
 * @create date 2021-05-10 14:29:23
 * @modify date 2021-05-10 14:29:23
 * @desc [description]
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
