import { globSync } from "node:fs";

const result = globSync("**/*.js");
console.log(result);
/**
[
  'node22/esm.js',
  'node22/glob.js',
  'node22/test.js',
  ...
]
 */
