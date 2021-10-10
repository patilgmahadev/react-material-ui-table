import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user info table header', () => {
  render(<App />);
  const tableHeaderUserInfo = screen.getByTestId('user-info-test-id');
  expect(tableHeaderUserInfo).toBeInTheDocument();
  expect(tableHeaderUserInfo).toHaveTextContent('User Info');
});
