// Copy only listed values from dict

'use strict';

const only = (obj, ...keys) => {
  const res = {};
  for (const key in obj) {
    if (keys.includes(key)) {
      const value = obj[key];
      res[key] = value;
    }
  }
  return res;
};

// Usage

const result = only({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
