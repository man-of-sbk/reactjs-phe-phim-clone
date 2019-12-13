// import { getChangedFilesForRoots } from 'jest-changed-files';
import diff from 'jest-diff';
const { parseWithComments } = require('jest-docblock');

// print the set of modified files since last commit in the current repo
// getChangedFilesForRoots(['./'], {
//   lastCommit: true,
// }).then(result => console.log(result.changedFiles));

test('jest-diff', () => {
  const a = { a: { b: { c: 5 } } };
  const b = { a: { b: { c: 6 } } };

  const res = diff(a, b);

  console.log(res);
});

test('jest-docblock', () => {
  const code = `
    /**
     * This is a sample
     *
     * @flow
     */
    
    console.log('Hello World!');
  `;

  const parsed = parseWithComments(code);

  // prints an object with two attributes: comments and pragmas.
  console.log(parsed);
});
