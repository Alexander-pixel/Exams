// Count types in array

'use strict';

const types = arr => {
  const res = new Map();
  for (const item of arr) {
    const type = typeof item;
    if (res[type] === undefined) res[type] = 1;
    else res[type]++;
  }
  return res;
};

// Usage

const result = types([5, true, 'string', 7, 'hello']);
console.log(result);
