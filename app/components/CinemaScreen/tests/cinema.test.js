import React from 'react';
import { render } from '@testing-library/react';

import Cinema from '../index';

describe('<Cinema /> Component', () => {
  it('Should correct snapshot', () => {
    const { container } = render(<Cinema />);
    const cinema = container.firstChild;
    expect(cinema).toMatchSnapshot();
  });
});
