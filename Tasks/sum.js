// Sum all numbers from array

'use strict';

const sum = arr => {
  let res = 0;
  for (const item of arr) {
    if (typeof item === 'number') {
      res += item;
    }
  }
  return res;
};

// Usage

const result = sum([5, true, 'string', 7, 'hello']);
console.log(result);
