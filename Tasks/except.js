// Copy all values from dict except listed

'use strict';

const except = (obj, ...keys) => {
  const res = {};
  for (const key in obj) {
    if (!(keys.includes(key))) {
      const value = obj[key];
      res[key] = value;
    }
  }
  return res;
};

// Usage

const result = except({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
