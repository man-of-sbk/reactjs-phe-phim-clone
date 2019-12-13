// import {
//   preTesting,
//   postTesting,
//   get,
//   set,
// } from '../test-jest/demoSetUpNtearDown';

// beforeAll(() => set(0));

// beforeEach(() => preTesting());

// afterEach(() => postTesting());

// afterAll(() => get());

// test('testing 1', () => {
//   const a = 'a';
//   expect(a).toBe('a');
// });

// test('testing 2', () => {
//   const a = 'a';
//   expect(a).toBe('a');
// });

// *** scope
const log = msg => console.log(msg);

describe('testing 2 scope', () => {
  console.log('testing 2 scope');

  beforeAll(() => log('before all 2'));
  beforeEach(() => log('before each 2'));
  afterEach(() => log('after each 2'));
  afterAll(() => log('after all 2'));

  test('testing 2', () => {
    const a = 'a';
    expect(a).toBe('a');
  });
});

describe('testing 1 scope', () => {
  console.log('testing 1 scope');

  beforeAll(() => log('before all 1'));
  beforeEach(() => log('before each 1'));
  afterEach(() => log('after each 1'));
  afterAll(() => log('after all 1'));

  test('testing 1', () => {
    const a = 'a';
    expect(a).toBe('a');
  });
});
