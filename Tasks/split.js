// Split array into two parts

'use strict';

const splitArray = (index, array) => [array.slice(0, index), array.slice(index, array.length)];

// Usage

const result = splitArray(3, ['a', 'b', 'c', 'd', 'e']);
console.log(result);
