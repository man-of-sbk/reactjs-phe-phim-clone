import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import Spinner from '../test-jest/Spinner';

// *** basic snapshot testing
(() => {
  // it('renders correctly', () => {
  //   const props = {
  //     loading: true,
  //     size: 60,
  //     color: 'blue',
  //   };
  //   expect(props).toMatchSnapshot();
  // });
})();

// *** snapshot with raw react component using react-test-renderer
(() => {
  it('renders correctly', () => {
    const props = {
      loading: true,
      size: 60,
      color: 'blue',
    };
    const tree = renderer.create(<Spinner {...props} />).toJSON();

    console.log(typeof tree);
    console.log(<Spinner {...props} />);

    expect(tree).toMatchSnapshot();
  });
})();

// *** snapshot with raw react component using react-testing-library
(() => {
  // it('renders correctly', () => {
  //   const props = {
  //     loading: true,
  //     size: 60,
  //     color: 'blue',
  //   };
  //   const tree = render(<Spinner {...props} />);
  //   console.log(tree);
  //   expect(tree).toMatchSnapshot();
  // });
})();
