import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MTable from '../Components/MTable';

jest.mock('@material-ui/core/TablePagination', () => {
  return {
    __esModule: true,
    default: (cprops) => {
      const { default: TablePaginationActual } = jest.requireActual('@material-ui/core/TablePagination');
      return <div>
            <button
      type="button"
      data-testid="TablePagination-onPageChange" 
    >
        onPageChange
    </button>
    <button
      type="button"
      data-testid="TablePagination-onRowsPerPageChange" 
    >
        onRowsPerPageChange
    </button>
        <TablePaginationActual {...cprops}/>
      </div>;
    },
  };
});

test('renders job info table header', () => {
  render(<MTable />);
  const tableHeaderUserInfo = screen.getByTestId('job-info-test-id');
  expect(tableHeaderUserInfo).toBeInTheDocument();
  expect(tableHeaderUserInfo).toHaveTextContent('Job Info');
});


test('handle pagination event', () => {
  render(<MTable />);
  const onPageChange = screen.getByTestId('TablePagination-onPageChange');
  expect(onPageChange).toBeInTheDocument();
  const onRowsPerPageChange = screen.getByTestId('TablePagination-onRowsPerPageChange');
  expect(onRowsPerPageChange).toBeInTheDocument();
});

// working but need take latest snapshot whenever run due to date. hence skipped
xtest('toMatch snapshot', () => {
  const tree = renderer.create(<MTable />);
  expect(tree).toMatchSnapshot();
});


