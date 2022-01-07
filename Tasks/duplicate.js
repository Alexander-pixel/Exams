// Push single value multiple times

'use strict';

const duplicate = (value, n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(value);
  }
  return res;
};

// Usage

const result = duplicate('abc', 5);
console.log(result);
