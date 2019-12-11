// *** basic mock function
(() => {
  // test('mock implementation', () => {
  //   const mockFn = jest.fn(() => 'bar');
  //   const result = mockFn('foo');
  //   expect(result).toBe('bar');
  //   expect(mockFn).toHaveBeenCalledWith('foo');
  //   expect(mockFn).toHaveBeenCalledTimes(2);
  // });
  // *** test implementation in mock function
  // test('also mock implementation', () => {
  //   const mockFn = jest.fn(val => val);
  //   const result = mockFn('hello');
  //   expect(result).toBe('hello');
  // });
})();

// *** .mock's properties
(() => {
  //   test('test .mock.calls & .mock.results', () => {
  //     const mockFn = jest.fn(val => val);
  //     mockFn(1);
  //     mockFn('hello');
  //     console.log(mockFn.mock.calls); // *** [ [ 1 ], [ 'hello' ] ]
  //     console.log(mockFn.mock.results); // *** [ { type: 'return', value: 1 }, { type: 'return', value: 'hello' } ]
  //     expect(mockFn).toHaveBeenCalledTimes(2);
  //     // *** expect the the first argument of the first call to be 1
  //     expect(mockFn.mock.calls[0][0]).toBe(1);
  //     // *** expect the the first argument of the second call to be 1
  //     expect(mockFn.mock.calls[1][0]).toBe('hello');
  //   });
  //   test('test .mock.instances', () => {
  //     const mockFn = jest.fn(val => val);
  //     new mockFn(1);
  //     new mockFn('hello');
  //     console.log(mockFn.mock.instances);
  //   });
})();

// *** .mock's methods
(() => {
  test('mock function test', () => {
    const myMock = jest.fn();

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
  });
})();
