// Find key by value

'use strict';

const find = (obj, value) => {
  for (const key in obj) {
    const val = obj[key];
    if (val === value) {
      return key;
    }
  }
  return undefined;
};

// Usage

const result = find({ a: 1, b: 2, c: 'hello', d: false }, 'hello');
console.log(result);

