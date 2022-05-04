import { render, cleanup } from '@testing-library/react';
import App from '../../App';
afterEach(cleanup);

test('should render app component', () => {
  const { getByTestId } = render(<App />);
});
