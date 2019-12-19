import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Button from '../index';

afterEach(() => cleanup());

describe('<Button /> Component', () => {
  test('Should correct snapshot', () => {
    const { container } = render(<Button>text</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should contain text chilren', () => {
    const { getByText } = render(<Button>button</Button>);
    const button = getByText('button');
    expect(button.textContent).toEqual('button');
  });

  test('Should correct text children when props children change', () => {
    const { getByText, rerender } = render(<Button>before change</Button>);
    getByText('before change');
    rerender(<Button>after change</Button>);
    getByText('after change');
  });

  test('Should test event click', () => {
    const mockFun = jest.fn();
    const { container, debug } = render(
      <Button onClick={mockFun}>button</Button>,
    );
    debug();
    fireEvent.click(container.firstChild);
    expect(mockFun).toHaveBeenCalled();
    expect(mockFun).toHaveBeenCalledTimes(1);
  });
});
