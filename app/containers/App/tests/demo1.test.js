import { demo1 } from '../test-jest/demo1';

test('1 + 2 = 3 !!!', () => {
  expect(demo1(1, 2)).toBe(3);
});
