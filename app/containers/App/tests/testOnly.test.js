test('this is ignore', () => {
  console.log('test 1');
});

test.only('only this is tested', () => {
  console.log('test 2');
});
