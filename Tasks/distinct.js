// Deduplicate values in array

'use strict';

const distinct = arr => [...new Set(arr)];

// Usage

const result = distinct([1, 2, 1, 3, 1, 4]);
console.log(result);
