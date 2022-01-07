// Delete listed keys from dictionary

'use strict';

const drop = (obj, ...keys) => {
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

const result = drop({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'f');
console.log(result);
