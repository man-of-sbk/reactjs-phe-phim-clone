// test('the data callback returns should be "aaa"', done => {
//   const callback = data => {
//     expect(data).toBe('aaa');
//     // done();
//     // *** done
//   };

//   return setTimeout(callback, 2000);
// });

// test('the data callback returns should be "aaa"', async () => {
//   const promise = new Promise(res => {
//     res('bbb');
//   });
//   const result = await promise;
//   expect(result).toEqual('aaa');
// });

// test('the data callback returns should be "aaa"', done => {
// const promise = new Promise(res => {
//   res();
// });
// return promise.then(result => {
//   expect(result).toEqual('aaa');
//   // done();
// });
// });


// *** return a timer function
test('the data callback returns should be "aaa"', () => {
	const  callback = (data) => {
    expect(data).toBe('aaa');
  }

	setTimeout(callback, 2000);
});
