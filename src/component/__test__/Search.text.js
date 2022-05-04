import { render, cleanup } from '@testing-library/react';
import Search from '../Search';
afterEach(cleanup);

test('should render search component', () => {
  const { getByTestId } = render(<Search />);
});
