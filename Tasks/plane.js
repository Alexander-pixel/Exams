// Make nested array plane

'use strict';

const plane = arr => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...plane(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

// Usage

const result = plane([1, [[2]], [3, 4], [5], [6, [7, 8]]]);
console.log(result);
