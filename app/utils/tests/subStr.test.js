import { subStr } from '../subStr';

test('Expect this one to return "vu quoc..." with the first argument is "vu quoc hung" and the second one is 2', () => {
  expect(subStr('vu quoc hung', 2)).toEqual('vu quoc...');
});
