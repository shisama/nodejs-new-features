#!/usr/bin/env node --experimental-require-module
const { foo } = require("./esm.js");

console.log(foo());
// bar
