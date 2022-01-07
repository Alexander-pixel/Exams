// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const res = {};
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if (key in obj2) {
      const value = obj1[key];
      res[key] = value;
    }
  }
  return res;
};

// Usage

const result = intersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
console.log(result);
