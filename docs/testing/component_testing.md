
# Component Testing

  

## Testing Library

The ***@testing-library*** family of package helps you test UI components in a user-centric way

  

### This solution

The core library, ***DOM Testing Library***, is a light-weight solution for testing web pages by querying and interacting with DOM nodes.

### Install

This module is distributed via npm and should install as one of your projects ```devDevpendencies```

```javascript

npm install --save-dev @testing-library/react

```

## API

### 1. render

Render into a container which is appended to document.body

```javascript

import  { render }  from  '@testing-library/react';

render(<div/>);

```
```javascript

import  { render }  from  '@testing-library/react;

import TodoList from  './TodoList';

test('render component todoList',()  =>  {

const  {  container  }  =  render(<TodoList  />)

});

```

#### * Options

##### container

Default, React Testing Library will create a div and appended on document.body. If you provide your own HTMLElement ```container``` via this option.

Example: ```tbody``` cannot be a child of a div, we can add a tag table as render ```container```

```javascript

const  table  = document.createElement('table');

const  {  container  }  =  render(<tbody  />,  {

container: document.body.appendChild(table)

})

```
#### * Result

##### ...queries

The most important feature of render is that the queries from ```DOM Testing Library```. Default is document.body.

See more at section ```Queries```

```javascript

const  {  getBytText,  getByLabelText  }  =  render(<Component  />);

```

##### rerender

if you test component that's doing the ```props updating``` to ensure that the props are being updated correctly

```javascript

import  { render }  from  '@testing-library/react'

const  {  rerender,  getByText  }  =  render(<Button>text</Button>);

getByText('text');

rerender(<Button>text change</Button>);

getByText('text change');

```
##### debug
This method is a shortcut for `console.log(prettyDOM(baseElement))`
```javascript
const HelloWord = () => <h1>Hello Word</h1>;
const { debug } = render(<HelloWord />)
debug();
// <body>
// 	<div>
// 		<h1>
//		 Hello Word
// 		</h1>
// 	</div>
// </body>
```
##### unmount
This will cause the rendered component to be unmounted. This is useful for testing what happens when your component is removed from the page
```javascript
import  { render }  from  '@testing-library/react'  
const  { container, unmount }  =  render(<Login />)  
unmount()
```

##### `asFragment`
Returns a `DocumentFragment` of your rendered component. This can be useful if you need to avoid live bindings and see how your component reacts to events.

##### container

The containing DOM node if your renders React Element. It is a ```div```

```Tip:``` To get root element of your rendered, use ```container.firstChild```

```javascript

const  {  container  }  =  render(<Button  />);

const  button  = container.firstChild;

```

### 2. cleanup

Unmounts React trees that were mounted with ```render```

Example

```javascript

import  { render, cleanup }  from  '@testing-library/react';

  

afterEach(cleanup());

  

test('render',  ()  =>  {

render(<div  />);

...

})

```

After each time test, react tree will be cleanup.

  

## Queries

  

#### 1. getBy***

Queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found [suggest use find getAllBy* ].

#### 2. getAllBy***

Queries return an array of all matching nodes for a query, and throw an error if no elements match.

#### 3. queryBy***

Queries return the first matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found

#### 4. queryAllBy***

Queries return an array of all matching nodes for a query, and return an empty array ([]) if no elements match

#### 5. findBy***

Queries return a promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 4500ms

#### 6. findAllBy***

Queries return a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 4500ms

##### *ByLabelText

This will search for label that matches the given TextMatch, then find the element with that label (node)

```javascript

// Input.js

import React from  'react';

import  { render, cleanup }  from  '@testing-library/react';

function  Login()  {

<label>Username</label>

<input  />

}

  

export  default Login;

  

test('Input render',  ()  =>  {

const  {  getLabelText  }  =  render(<Login  />);

const  input  =  getLabelText('Username');

})

```

##### *ByText

This will search for all elements that have a text node with TextContext matching the given TextMatch

```javascript

// Button.js

import React from  'react';

import  { render, cleanup }  from  '@testing-library/react';

function  Button()  {

<button>text<button>

}

export default Login;

test('Input render', () => {

const { getByText }  =  render(<Button  />);

const input =  getLabelText('text');

})

```
##### *ByPlaceholderText
This will search for all elements with a placeholder attribute and find one that matches the given
```javascript
test('query getByPlaceholderText', () => {
	const { getPlaceholderText } = render(<input placeholder="placeholder_input" />);
	getByPlaceholderText('placeholder_input');
	// Do something
})
```
##### *ByAltText
This will return the element ( normally an ``<img>`` ) that has the given ``alt`` text.
Note: It only supports elements which accept an ``alt`` attribute: ``<img``, ``input``, ``area``.
```javascript
test.only("query getByAltText",  ()  =>  {

const { getByAltText } =  render(<img  alt="img_alt"  />);

getByAltText("img_alt");

// selector: <img />

});
```
##### *ByTitle
Returns the elements that has the matching ``title`` attribute.
Will also find a ``title`` element within an SVG
```javascript
function  TitleComponent()  {

return  ( <>
	<span  title="span_title">span tag</span>
	<svg>
		<title>title_Text</title>
	</svg>
	</>);
}

test.only("query getByTitle",  ()  =>  {

const { getByTitle } =  render(<TitleComponent  />);

getByTitle("span_title");

// selector: <span />

getByTitle("title_Text");

// selector: only find <title /> within <sgv />

});
```
##### *ByDisplayValue
Returns the ``input``, ``textarea``, or ``select`` element that has the matching display value.
```javascript
test.only("query getByDisplayValue input",  ()  =>  {

const { getByDisplayValue } =  render(

	<input  value="value_input"  onChange={() =>  null} />

);

getByDisplayValue("value_input");
// selector: <input />
});

test.only("query getByDisplayValue select",  ()  =>  {

const { getByDisplayValue } =  render(
	<select>
		<option>Yasua</option>
		<option  selected>Zed</option>
		<option>Tristana</option>
		<option>...</option>
	</select>
);

getByDisplayValue("Zed");
//selector: <select />
});
```
##### *ByTestId
Returns the elements that has the matching ``data-testid`` attribute.
```javascript
test.only("query getByTestId",  ()  =>  {

const { getByTestId } =  render(<div  data-testid="element">...</div>);

getByTestId("element");

});
```
##### *ByRole
Returns the elements that has the matching ``role`` attribute.
```javascript
test.only("query getByRole",  ()  =>  {

const { getByRole } =  render(<div  role="dialog">...</div>);

getByRole("dialog");

});
```


|            | No match | 1 Match | 1+ Match | Await |
|:----------:|:--------:|:-------:|:--------:|:-----:|
|    getBy   |   throw  |  return |   throw  |   No  |
|   findBy   |   throw  |  return |   throw  |  Yes  |
|   queryBy  |   null   |  return |   throw  |   No  |
|  getAllBy  |   throw  |  array  |   array  |   No  |
|  findAllby |   throw  |  array  |   array  |  Yes  |
| queryAllBy |    []    |  array  |   array  |   No  |

### Events
* **fireEvent trigger** Dom event: ``fireEvent(node, event)``
* **fireEvent.*** helpers for default event types.
### Async
### ``wait``
```javascript
function wait(
	callback: () => void,
	options ? : {
	timeout: number,
	interval: number,
)
```
when in need to wait for non-deterministic periods of time you can use wait.
The default ``callback`` within ``wait`` is a no-op function ( ``wait()`` ). This can be useful if you have unit test mocks API
The default ``timeout`` is 4500ms.
### ``waitForElement``
when in need to wait for DOM element to appear, or change you can use ``waitForElement``.
```javascript
// ...
const element = await waitForElement(getByText(/button/i));
element.textContent = 'Done';
//...
```
The difference from `wait` is that rather than running your callback on an interval, it's run as soon as there are DOM changes in the container and returns the value returned by the callback.
### ``waitForElementToBeRemoved``
To wait for the removal of element from DOM you can use `waitForElementToBeRemoved`
The callback must return the pre-existing element or array of elements that are expected to be removed.
```javascript
function Demo(){
	return <div>
		<p>text</p>
	</div>
}

test('wait remove element', () => {
	const { getByText, container } = render(<Demo />);
	waitForElementToBeRemoved(() => getByText('text'))
		.then(() => console.log('element removed'));
	container.firstChild.removeChild(getByText('text'));
})
```
See more basic example here: [Codesanbox](https://codesandbox.io/s/beautiful-khorana-bh2nt)