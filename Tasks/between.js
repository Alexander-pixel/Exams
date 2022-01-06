// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (str, p, s) => {
  const pIndex = str.indexOf(p);
  if (pIndex === -1) {
    return '';
  } else {
    const sIndex = str.indexOf(s);
    if (sIndex === -1 || sIndex <= pIndex) {
      return '';
    } else {
      return str.substring(pIndex + 1, sIndex);
    }
  }
};

// Usage

const result = getValueBetween('Hello <username> and bye!', '>', '<');
console.log(result);
