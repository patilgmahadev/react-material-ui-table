import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MTable from '../Components/MTable';

test('renders job info table header', () => {
  render(<MTable />);
  const tableHeaderUserInfo = screen.getByTestId('job-info-test-id');
  expect(tableHeaderUserInfo).toBeInTheDocument();
  expect(tableHeaderUserInfo).toHaveTextContent('Job Info');
});

test('toMatch snapshot', () => {
  const tree = renderer.create(<MTable />);
  expect(tree).toMatchSnapshot();
});
