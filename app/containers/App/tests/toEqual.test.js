test('test', () => {
  const data = {
    one: 1,
    two: {
      three: 3,
    },
  };

  expect(data).toEqual({
    one: 1,
    two: {
      three: 3,
    },
  });
});
