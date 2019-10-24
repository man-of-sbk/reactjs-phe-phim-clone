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
## Package Warnings
 * ####  Moment.js:
	 * `
./node_modules/moment/src/lib/locale/locales.js
Module not found: Error: Can't resolve './locale' in 'project\node_modules\moment\src\lib\locale'`
	* => `aliasedRequire('./locale/' + name);` in `'node_modules\moment/src/lib/locale/locales.js'`. should be: `aliasedRequire('../locale/'  +  name);` 
