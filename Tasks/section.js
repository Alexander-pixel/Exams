// Split string by the first occurrence of separator

'use strict';

const splitString = (str, separator) => {
  const index = str.indexOf(separator);
  const res = [];
  if (index === -1) {
    return res.push(str);
  } else {
    res.push(str.slice(0, index));
    res.push(str.slice(index + separator.length, str.length));
    return res;
  }
};

// Usage

const result = splitString('All you need is JavaScript', 'is');
console.log(result);
