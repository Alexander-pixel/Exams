// Copy all listed keys from dictionary

'use strict';

const take = (obj, ...keys) => {
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

const result = take({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'c');
console.log(result);
