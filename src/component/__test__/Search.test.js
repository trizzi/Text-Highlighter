import { render, cleanup } from '@testing-library/react';
import Search from '../Search';
afterEach(cleanup);

test('should render search without crashing', () => {
  render(<Search />);
});
