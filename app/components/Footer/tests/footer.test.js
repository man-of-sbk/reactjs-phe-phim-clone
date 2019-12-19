import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../index';

describe('<Footer/> Component', () => {
  it('Should correct snapshot', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
