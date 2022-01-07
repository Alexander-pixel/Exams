// Generate int array from given range

'use strict';

const range = (min, max) => {
  if (max > min) {
    const res = new Array(max - min + 1);
    for (let i = min; i <= max; i++) {
      res[i - min] = i;
    }
    return res;
  } else {
    return [];
  }
};

// Usage

const result = range(10, 20);
console.log(result);
