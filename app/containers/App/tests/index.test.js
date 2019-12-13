import { weekdaysShort } from 'moment';
import * as math from '../test-jest/math';
import * as app from '../test-jest/app';

// Set all exported functions of the math.js file to mock versions of themselves automatically
// jest.mock('../test-jest/math');

const addMock = jest.fn((a, b) => a + b);

test('calls math.add', () => {
  console.log(addMock);
  // expect(math.add.mock.results[0].value).toBe(3);
});

// test('calls math.subtract', () => {
//   console.log(math.subtract(1, 2));
//   // expect(math.add.mock.results[0].value).toBe(3);
// });
