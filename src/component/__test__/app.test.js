import { render, cleanup } from '@testing-library/react';
import App from '../../App';
afterEach(cleanup);

test('should render App without crashing', () => {
  render(<App />);
});
