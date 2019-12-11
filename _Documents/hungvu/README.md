# Jest
## 1. Installation:
With **yarn**:
```
$ yarn add --dev jest
```
With **npm**:
```
$ npm install --save-dev jest
```
## 2. Basic working flow

 **1**. Write the function needing testing
```javascript
export const sum = (a, b) => a + b;
```

**2**. Create a file with `.test.js` extension (e.g. `index.test.js`) in order to test the above function. Then, import the function needing testing. Finally, add `jest` testing methods. (no need to import those methods since they'll be executed via `jest's cli`).
```javascript
import { sum } from 'index.js';

/*
	*** the first arg of the following 'test' function is an error message will being logged
	when the 'sum' function doesn't perform correctly as what we expect
*/
test('1 + 2 must be 3', () => {

	// *** expect the 'sum' function to return 3 when receiving two arguments, 1 & 2
	expect(sum(1, 2)).toBe(3);
});
```

 **3**. Add an `npm` command executing `jest` cli which will end up identifying as well as executing the `jest` methods above automatically on being performed to the `package.json` file.
 ```javascript
...
"scripts": {
	"test": "jest",
	...
},
...
```
 **4**.  Execute the newly-created command above so as to to perform the test cases we defined above in the file with `.test.js` extension.
 
 The command will scan through our project, find files with `.test.js` extension and execute them
```
	$ npm run test
```

**Result**:
1. a success result:
```
PASS app/containers/App/tests/index.test.js
```

2. a fail result:
```
FAIL  app/containers/App/tests/index.test.js
 ● 1 + 2 = 3 !!!

   expect(received).toBe(expected) // Object.is equality

   Expected: 3
   Received: -1

     2 | 
     3 | test('1 + 2 must be 3 !!!', () => {
   > 4 |   expect(sum(1, 2)).toBe(3);
       |                       ^
     5 | });
     6 | 

     at Object.toBe (app/containers/App/tests/index.test.js:4:23)
```

## 3. `Object.is` vs ===
`Object.is` is used to compare 2 values. It is pretty similar to `===`. Nonetheless, with it will treat some specific values distinctly from `===`. 

**Examples**:

```javascript
console.log(+0 === -0); // *** true
console.log(Object.is(+0, -0)); // *** false

console.log(NaN === NaN); // *** false
console.log(Object.is(NaN, NaN)); //true

console.log(Number.NaN === Number.NaN); // *** false
console.log(Object.is(Number.NaN, Number.NaN)); // *** true

console.log(NaN === Number.NaN); // *** false
console.log(Object.is(NaN, Number.NaN)); // *** true

console.log([] === []); // *** false
console.log(Object.is([], [])); // *** false

console.log({} === {}); // *** false
console.log(Object.is({}, {})); // *** false
```

## 4. Matchers
Matchers are methods of `expect` function, which let us test given values.

Different matchers as well as detail information about them can be found at [this](https://jestjs.io/docs/en/expect).

**Examples**:
```js
test('object assignment', () => {
	const data = {};
	
	data.one = 1;
	data.two = 2;
			
	expect(data)
		.toEqual({ one: 1, two: 2 }); // *** this is a 'matcher'
});
```

### Notice: `toBe` vs  `toEqual`:
`toEqual` performs a **deep** comparison while `toBe` is similar to `===` with special treatments over a certain number of cases.

**Examples**:
```js
test('test', () => {
	const  data  = {
		one:  1,
		two: {
			three: 3,
		},
	};
	
	// *** 'toEqual' perform a deep comparison
	expect(data).toEqual({
		one:  1,
		two: {
			three:  3
		}
	});
});

/*
	*** result: PASS  app/containers/App/tests/index.test.js
*/
```

## 5. Testing asynchronous functions

### 1. Dealing with Callbacks

`Jest` tests values synchronously. Therefore, when needing to test asynchronous functions, we have to tell `jest` when the asynchronous functions ends in order to make `jest` work as what it is expected to.


```js
test('the data callback returns should be "aaa"', () => {
	const  callback = data => {
		/*
			*** this function doesn't receive any argument. Thus, jest should
				return a FAIL result. However, jest will ignore this function
				and return PASS result
		*/
		expect(data).toBe('aaa');
	};
	
	setTimeout(callback, 2000);
});
/*
	*** RESULT: PASS  app/containers/App/tests/testAsync.test.js
*/ 
```

In order to deal with asynchronous functions, `jest` provides the  callback function of the `test` method an argument, a function telling `jest` when the code it is testing ends.

```js
test('the data callback returns should be "aaa"', done => {
	const callback = data => {
		expect(data).toBe('aaa');
		done(); // *** tells jest that this is when this callback function ends
	};

	setTimeout(callback, 2000);
});

/*
	*** RESULT:
		FAIL  app/containers/App/tests/testAsync.test.js
			● Console
			    console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
			    ...
		    
			● the data callback returns should be "aaa"

			    expect(received).toBe(expected) // Object.is equality

			    Expected: "aaa"
			    Received: undefined

			    Difference:

			      Comparing two different types of values. Expected string but received undefined.

			      1 | test('the data callback returns should be "aaa"', done => {
			      2 |   const callback = data => {
			    > 3 |     expect(data).toBe('aaa');
			        |                  ^
			      4 |     done();
			      5 |   };
			      6 | 

			      at toBe (app/containers/App/tests/testAsync.test.js:3:18)
			      at Timeout.callback [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:678:19)
*/
```
	
### 2. Dealing with Promise
On dealing with testing a Promise, we could just simply make use of the argument of the callback function of the `test` function like above.

```js
test('the data callback returns should be "aaa"', done  => {
	const  promise  =  new  Promise(res  => {
		res();
	});

	promise.then(result  => {
		expect(result).toEqual('aaa');
		done();
	});
});

/*
	*** RESULT:
		 FAIL  app/containers/App/tests/testAsync.test.js
		  ● the data callback returns should be "aaa"

		    expect(received).toEqual(expected)

		    Expected: "aaa"
		    Received: undefined

		      22 | 
		      23 |   promise.then(result => {
		    > 24 |     expect(result).toEqual('aaa');
		         |                    ^
		      25 |     done();
		      26 |   });
		      27 | });

		      at toEqual (app/containers/App/tests/testAsync.test.js:24:20)
*/
```

Or just return the Promise we want to test.
```js
test('the data callback returns should be "aaa"', () => {
	const  promise = new  Promise(res => {
		res();
	});

	return promise.then(result => {
		expect(result).toEqual('aaa');
	});
});

/*
	*** RESULT:
		 FAIL  app/containers/App/tests/testAsync.test.js
		  ● the data callback returns should be "aaa"

		    expect(received).toEqual(expected)

		    Expected: "aaa"
		    Received: undefined

		      22 | 
		      23 |   promise.then(result => {
		    > 24 |     expect(result).toEqual('aaa');
		         |                    ^
		      25 |     done();
		      26 |   });
		      27 | });

		      at toEqual (app/containers/App/tests/testAsync.test.js:24:20)
*/
```

### 3. Async/await
No need to do anything !
```js
test('the data callback returns should be "aaa"', async () => {
	const  promise  =  new  Promise(res  => {
		res('bbb');
	});

	const  result  =  await  promise;

	expect(result).toEqual('aaa');
});

/*
	*** RESULT: similar to 2 examples above
*/
```

## 6. Setup and Teardown
At times, we might need to do something before or after each test runs. `jest` provides us helpers to handle this kind of situation.

### 1. Repeating functions for each test
To run a function repeatedly after or before a test runs, we could leverage: `beforeEach` & `afterEach` functions. These 2 functions only have interaction with tests inside the file where they are defined.

**Examples**:
1. Create a file named `index.js`:
```js
export  const  preTesting  = () =>  console.log('start testing');

export  const  postTesting  = () =>  console.log('testing done');
```

2. Create a test file named `index.test.js` & start testing: 
```js
import { preTesting, postTesting, get } from  '../test-jest/demoSetUpNtearDown';

// *** run the preTesting function before each test runs
beforeEach(() => preTesting());

// *** run the postTesting function after each test runs
afterEach(() => postTesting());

test('testing 1', () => {
	const  a  =  'a';
	expect(a).toBe('a');
});

test('testing 2', () => {
	const a = 'a';
	expect(a).toBe('a');
});

/*
	*** RESULT:
		 PASS  app/containers/App/tests/index.test.js
		● Console
		
		      start testing
		      testing done
		      start testing
		      testing done
*/
```

### 2. Run a function once after or before all tests run
`jest` provides `beforeAll` & `afterAll` functions to handle this situation. These 2 functions only have interaction with tests inside the file where they are defined.

1. add additional functions to `index.js`
```js
let numberOfTest = 0;

export const preTesting = () => console.log('start testing');

export const postTesting = () => {
	console.log('testing done');
	numberOfTest  +=  1;
};

export const get = () => {
	console.log(numberOfTest);
};

export const set = val => {
	numberOfTest  =  val;
	console.log(numberOfTest);
};
```

2. `index.test.js`
```js
import {
	preTesting,
	postTesting,
	get,
	set,
} from  '../test-jest/demoSetUpNtearDown';

// *** run set function before all tests run
beforeAll(() =>  set(0));

beforeEach(() =>  preTesting());

afterEach(() =>  postTesting());

// *** run get function after all tests run
afterAll(() =>  get());

test('testing 1', () => {
	const  a  =  'a';
	expect(a).toBe('a');
});

test('testing 2', () => {
	const  a  =  'a';
	expect(a).toBe('a');
});

/*
	 PASS  app/containers/App/tests/index.test.js
	  ● Console
	  
	      0
	      start testing
	      testing done
	      start testing
	      testing done
	      2
*/
```

### 3. Scoping
By default, all above functions provided by `jest`  are implemented to every test in a file. However, we can also gather tests together use `describe` function.

Notice that the describe defined before other ones will run before others. Another thing needed remembering is that when `jest` scout a file, it will run all `descibe` functions of that file before **all** `before`/`after` functions are executed.

**Examples**:
```js
const  log  =  msg  =>  console.log(msg);

describe('testing 1 scope', () => {
	beforeAll(() =>  log('before all 1'));
	beforeEach(() =>  log('before each 1'));
	afterEach(() =>  log('after each 1'));
	afterAll(() =>  log('after all 1'));

	test('testing 1', () => {
		const  a  =  'a'
		expect(a).toBe('a');
	});
});

describe('testing 2 scope', () => {
	beforeAll(() =>  log('before all 2'));
	beforeEach(() =>  log('before each 2'));
	afterEach(() =>  log('after each 2'));
	afterAll(() =>  log('after all 2'));

	test('testing 2', () => {
		const  a  =  'a';
		expect(a).toBe('a');
	});
});

/*
	*** RESULT:
		 PASS  app/containers/App/tests/index.test.js
		  ● Console

		      before all 1
		      before each 1
		      after each 1
		      after all 1
		      before all 2
		      before each 2
		      after each 2
		      after all 2
*/
```

### 4. Only test one test in a file
We can use `test.only` method in order to run only one test & ignore all other ones.

```js
test('this is ignore', () => {
	console.log('test 1');
});

test.only('only this is tested', () => {
	console.log('test 2');
});
```

## 7. Mock function (function giả định)
Mocking a function is replacing functions we don't control with mock functions over which we have full control.

We could use `jest.fn()` to create a mock function.
```js
test("be expected to returns undefined", () => {
	const mockFn = jest.fn();
	let result = mockFn("foo");
	
	// *** expect the mock function to return undefined
	expect(result).toBeUndefined();
	
	// *** expect the mock function to be called
	expect(mockFn).toHaveBeenCalled();
	
	// *** expect the mock function to be called once
	expect(mockFn).toHaveBeenCalledTimes(1);
	
	// *** expect the mock function to be called with an arg whose value is "foo"
	expect(mockFn).toHaveBeenCalledWith("foo");
});
```

Since We have full control over mock functions we created, we define it in our own ways.
```js
test('be expected to return "hello" on receiving "hello"', () => {
	// *** define our own mock function
	const mockFn = jest.fn(val => val);
	const result = mockFn('hello');

	expect(result).toBe('hello');
});
```
### 1. `.mock` property
All mock functions has this `.mock` property which contains data about how the mock functions are called as well as values they return.

#### 1. `.mock.calls`
Contains information about the number of calls of a mock function as well as it's arguments in each call.
```js
test('mock function test', () => {
	const mockFn = jest.fn(val => val);

	mockFn(1);
	mockFn('hello');
	
	console.log(mockFn.mock.calls); // *** [ [ 1 ], [ 'hello' ] ]
	
	expect(mockFn).toHaveBeenCalledTimes(2);
	
	// *** expect the the first argument of the first call to be 1
	expect(mockFn.mock.calls[0][0]).toBe(1);
	
	// *** expect the the first argument of the second call to be 1
	expect(mockFn.mock.calls[1][0]).toBe('hello');
});
```
#### 2. `.mock.results`
Contains information about a mock function's returned value in each call.
```js
test('mock function test', () => {
	const mockFn = jest.fn(val => val);

	mockFn(1);
	mockFn('hello');
	
	console.log(mockFn.mock.calls); // *** [ [ 1 ], [ 'hello' ] ]
	console.log(mockFn.mock.results); // *** [ { type: 'return', value: 1 }, { type: 'return', value: 'hello' } ]
});
```

#### 3. `.mock.instances`
Contain value of `this` of a mock constructor function on each of it's call.
```js
test('mock function test', () => {
	const mockFn = jest.fn(val => val);

	new constmockFn(1);
	new mockFn('hello');
	
	console.log(mockFn.mock.instances); // *** [ mockConstructor {}, mockConstructor {} ]
});
```

### 2. Mock functions returned value
pre-define returned values for a mock function on each called sequentially.
```js
(() => {
	test('mock function test', () => {
		const  myMock  =  jest.fn();

		myMock
			.mockReturnValueOnce(10)
			.mockReturnValueOnce('x')
			.mockReturnValue(true);

		console.log(myMock(), myMock(), myMock(), myMock()); // *** 10 x true true
	});
})();
```

### 3. # Mocking modules

Assume that we have 3 files: `index.js`, `index.test.js`, `math.js`.

**math.js**
```js
export const add = (a, b) => a + b;

export const subtract = (a, b) => b - a;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => b / a;
```

**index.js**
```js
import * as math from './math';

export const doAdd = (a, b) => math.add(a, b);

export const doSubtract = (a, b) => math.subtract(a, b);

export const doMultiply = (a, b) => math.multiply(a, b);

export const doDivide = (a, b) => math.divide(a, b);
```

Now we want to test the functions inside `math.js` via their mock version when they're called by functions inside `index.js`.

#### 1. Mock a function with `jest.fn`

This is the most basic way of mocking an existing function. Nonetheless, it can hardly be scalable.

**index.test.js**
```js
import * as app from "./app";
import * as math from "./math";

// *** mock add & subtract function
math.add = jest.fn();
math.subtract = jest.fn();

test("test math.add", () => {
	// *** math.add is executed via app.doAdd
	app.doAdd(1, 2);

	// *** test the mock version of math.add
	expect(math.add).toHaveBeenCalledWith(1, 2);
});

// *** same as above
test("test math.subtract", () => {
	app.doSubtract(1, 2);
	expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
```

#### 2. Mock a module with `jest.mock`
`jest.mock` helps us assign all exported function of a file to mock versions of themselves automatically.

```js
import * as app from "./app";
import * as math from "./math";

// Set all exported functions of the math.js file to mock versions of themselves automatically
jest.mock("./math.js");

test("calls math.add", () => {
	app.doAdd(1, 2);
	expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
	app.doSubtract(1, 2);
	expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
```

#### 3. Spy or mock a function with `jest.spyOn`
Not so scalable. Nonetheless, we could always refer to both the original version as well as the mock version of a function
```js
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
	const addMock = jest.spyOn(math, "add");

	// calls the original version of math.add via app.doAdd
	expect(app.doAdd(1, 2)).toEqual(3);

	// calls the mock version of math.add
	expect(addMock).toHaveBeenCalledWith(1, 2);
});
```



