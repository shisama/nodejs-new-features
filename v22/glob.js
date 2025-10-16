import { glob } from "node:fs";

glob("**/*.js", (err, matches) => {
	console.log(matches);
});
/**
[
  'node22/esm.js',
  'node22/glob.js',
  'node22/test.js',
  ...
]
 */
