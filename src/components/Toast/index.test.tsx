import ReactDOM from 'react-dom';
import { toast } from './index';
import { Toaster } from './index';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('it', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    toast('Hello World');
    ReactDOM.render(<Toaster />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
