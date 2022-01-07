// Change double quotation to open or close quotation

'use strict';

const quotes = str => {
  let previous = '';
  let res = '';
  for (const item of str) {
    if (item !== '"') {
      res += item;
    } else if (previous === '«') {
      res += '»';
      previous = '»';
    } else {
      res += '«';
      previous = '«';
    }
  }
  return res;
};


// Usage

const result = quotes('Hello "Marcus"! Ave "Marcus"!');
console.log(result);
