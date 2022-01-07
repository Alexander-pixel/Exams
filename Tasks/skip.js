// Remove values from array

'use strict';

const removeSelected = (arr, ...values) => {
  const res = [];
  for (const item of arr) {
    if (!values.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

// Usage

const result = removeSelected([1, 2, 3, 4, 5], 2, 5);
console.log(result);
