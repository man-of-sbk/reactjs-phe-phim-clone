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

 **1**. prepare a function needing testing
```javascript
export const sum = (a, b) => a + b;
```

**2**. Create a file with `.test.js` extension (e.g. `index.test.js`). Then, import the function which need testing. Finally, create test cases based on functions `jest` provides. (no need to import these functions since they will be executed via `jest cli`).
```javascript
import { sum } from 'index.js';

/*
	*** define a test case
*/
test('test case description', () => {

	// *** expect the 'sum' function to return 3 when receiving two arguments, 1 & 2
	expect(sum(1, 2)).toBe(3);
});
```

 **3**. Create a command based on `jest cli` to run test cases.

 ```javascript
...
"scripts": {
	"test": "jest",
	...
},
...
```
 **4**.  Execute the newly-created command.
 
 The command will scan through our project, find files with `.test.js` extension and execute them
```
	$ npm run test
```

**Result**:

**1**. a success result:
```
PASS app/containers/App/tests/index.test.js
```

**2**. a fail result:
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

## 3. `it` vs `test`

`it` is just an alias of `test` which provides better & more readable desciptions for test cases in certain circumstances.

```js
import { sum } from  '../test-jest/sum';

it('should returns 3 when receiving 1 & 2', () => {
	expect(sum(1, 2)).toBe(3);
});
```



## 3. `Object.is` vs ===
`Object.is` is used to compare 2 values. It is pretty similar to `===`. Nonetheless, it will treat some specific values diffirently from `===`. 

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
Matchers are methods of `expect` function, which let us define expected output of given values/functions

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
`toEqual` performs a **deep** comparison while `toBe` is like a `===` with special treatments over a certain number of values.

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

### 1. Callback functions

`Jest` tests values synchronously. Therefore, when needing to test asynchronous functions, we have to tell `jest` when the asynchronous functions ends.

The test case below should return FAIL since the `callback` function receives no argument. However, it returns PASS because  `jest` switch to other test cases right after the `setTimeout` statement is called and completely ignore the `callback` function of the `setTimeout`.


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
*/
```
	
### 2. Promise
Another approach we could implement is just simply returning a `timer` function. or a `Promise`

**Timer function**
```js
test('the data callback returns should be "aaa"', () => {
	const  callback  = (data) => {
		expect(data).toBe('aaa');
	}
	
	setTimeout(callback, 2000);
});

/*
	*** RESULT:
		 FAIL  app/containers/App/tests/testAsync.test.js
*/
```


**Promise**
```js
test('the data callback returns should be "aaa"', () => {
	const promise = new Promise(res => {
		res();
	});

	return promise.then(result => {
		expect(result).toEqual('aaa');
	});
});

/*
	*** RESULT:
		 FAIL  app/containers/App/tests/testAsync.test.js
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
At times, we might need to do something before or after each test case runs. `jest` provides us helpers to handle this kind of situation.

### 1. Run a function after or before each test case
To run a function after or before a test case runs, we could utilize: `beforeEach` & `afterEach` functions. `beforeEach` & `afterEach` only have effects inside the file where they are defined.

**Examples**:

**1**. Here in a `index.js` file, i defined 2 functions, `preTesting` running before a test case runs and `postTesting` running after a test case runs:
```js
export  const  preTesting  = () =>  console.log('start testing');

export  const  postTesting  = () =>  console.log('testing done');
```

**2**. Then i have a `index.test.js` file:

When this file is tested, the `preTesting` function will run before both `testing 1` & `testing 2` test cases. The same is applied to the `postTesting` function.
 
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
`jest` provides `beforeAll` & `afterAll` which helps us executing 2 functions, one runs before all test cases run, the second runs after all test cases run. `beforeAll` & `afterAll` only have effects on the file where they are defined

**1**. Here i added a number of new functions to `index.js`

Now, the `index.js` file is in charge of giving us the number of test cases which are tested

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

**2**. `index.test.js`
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
All `jest` functions above have effects only on the file where they are defined. We can also gather them together so as to limit their effects on only a certain number of test cases using `describe` function.

Notice that the describe defined before other ones will run before others. Another thing you need to remember is that when `jest` scout a file, it will run all `descibe` functions of that file before **all** `before`/`after` functions are executed.

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

### 4. Other useful methods

**1**. **.only** & **.skip**

We can use `.only`, `.skip` methods so as to run only one test case & ignore all other ones or skip testing specific test cases.

Both `.only`, `.skip` can be implemented with both `test` / `it` and `describe` as well.

```js
test('this is ignore', () => {
	console.log('test 1');
});

test.only('only this is tested', () => {
	console.log('test 2');
});
```

**2**. **.each**

If we want to test something with a set of data, we could utilize `.each` method which could be implemented to `describe`, `test`, `it`, `it.skip`, `it.only`, e.g.

`.each` return a higher-order function which receives:

**an `array` of `arrays`.**

The length of the `first array` indicates how many time a test case will run.

The `arrays` the `first array` **contains** keeps arguments a test case receives on each of it's loop time.

**Example**: 
```js
[
	[1, 1, 2],
	[1, 2, 3],
	[1, 3, 4]
]
```

After the higher-order function is executed, it returns a test case with small changes on each of it's arguments:

**1**. The first argument, the description of the test case is now parsed by `jest` when it is logged. Basically, if the string contains one of following characters:

`%p` - **Pretty format**
`%s` - **String**
`%d` - **Number**
`%i` - **Integer**
`%f` - **Floating point value**
`%j` - **JSON**
`%o` - **Object**
`%#` - **Index of the current loop time of a test case**

The characters will be parsed and they will return value of arguments of a test case on each loop according to the arguments' index and the characters' possition.

**Example**:

```js
test.each([
	[1, 1, 2],
	[1, 2, 3],
	[1, 3, 4],
])
('loop %#, expect %i + %i to be %i', (a, b, expectedVal) => {
	expect(a + b).toBe(expectedVal);
});
```


## 7. Mock function
Mock function are special functions allowing us to track how a particular function is called by external code.

By using mock functions, we can know the following:

 - How many times is a function called.
 - Argument values of a function on each call.
- `this`  value of a function on each call.
- The value a function returns.

To create a mock function, use  `jest.fn()`
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
Contains information about the value a mock function returns in each call.
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
Contain the value of `this` of a mock constructor function on each of it's call.
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

### 3. Mocking modules

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

The most basic way of mocking an existing function.

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

This approach give us the ability to refer to the original version of a function after it's mocked.

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

## 8. Some other Jest add-on could be useful
### jest-diff
A library helping us perform a deep compare between 2 values 
```js
import  diff  from  'jest-diff';

it('hello', () => {
	const  a  = { a: { b: { c:  5 } } };
	const  b  = { a: { b: { c:  6 } } };

	const  res  =  diff(a, b);
	  
	console.log(res);
});

/*
	*** result:
		 PASS  app/containers/App/tests/index.test.js
		  ● Console

		    console.log app/containers/App/tests/testChangeFile.test.js:19
		      - Expected
		      + Received
		      
		        Object {
		          "a": Object {
		            "b": Object {
		      -       "c": 5,
		      +       "c": 6,
		            },
		          },
		        }
*/
```

### Other ones can be found at [this](https://jestjs.io/docs/en/jest-platform).