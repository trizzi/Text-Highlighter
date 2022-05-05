import { render, cleanup } from '@testing-library/react';
import App from '../../App';
afterEach(cleanup);

test('renders App without crashing', () => {
  render(<App />);
});
