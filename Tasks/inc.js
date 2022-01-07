// Increment all numbers in dictionary

'use strict';

const inc = dict => {
  for (const key in dict) {
    const value = dict[key];
    if (typeof value === 'number') {
      dict[key]++;
    }
  }
  return dict;
};

// Usage

const result = inc({ a: 1, b: 2, c: 'hello', d: false });
console.log(result);
