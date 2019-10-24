## Convension
* #### Commit format:
	* refs #{id} {message}
	* Exp:
		* refs #1 init commit.
* #### Commit ids:
	* #1: for settings.
	* #2 / #3: add a new function. 
	* #4: fix / reinforce / update a function.
	* #5: complete a function.
## Convension
* #### Use modularized antd:
  * 1. install: https://www.npmjs.com/package/babel-plugin-import.
  * 2. add: `['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]` to `plugins` array in `babel.config.js`.
  * 3. import a component:
    * `import Col from 'antd/lib/col'`
## Package Warnings
 * ####  Moment.js:
	 * `
./node_modules/moment/src/lib/locale/locales.js
Module not found: Error: Can't resolve './locale' in 'project\node_modules\moment\src\lib\locale'`
	* => `aliasedRequire('./locale/' + name);` in `'node_modules\moment/src/lib/locale/locales.js'`. should be: `aliasedRequire('../locale/'  +  name);` 
