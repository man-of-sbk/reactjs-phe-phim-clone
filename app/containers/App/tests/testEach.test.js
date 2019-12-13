// test.each([[1, 1, 2], [1, 2, 3], [1, 3, 4]])('%i, %i', (a, b, expectedVal) => {
//   expect(a + b).toBe(expectedVal);
// });

// test.each(
//   [
//     [1, 1, 2],
//     [1, 2, 3],
//     [1, 3, 4]
//   ]
// )('%i, %i', (a, b, expectedVal) => {
//   expect(a + b).toBe(expectedVal);
// });

test.each([[1, 1, 2], [1, 2, 3], [1, 3, 4]])(
  'loop %#, expect %i + %i to be %i',
  (a, b, expectedVal) => {
    expect(a + b).toBe(expectedVal);
  },
);
