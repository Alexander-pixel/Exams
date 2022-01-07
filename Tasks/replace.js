// Replace substring with newStr

'use strict';

const replace = (str, substr, newStr) => {
  if (substr.length === 0) {
    return str;
  } else {
    const index = str.indexOf(substr);
    const start = str.substring(0, index);
    const end = str.substring(index + substr.length);
    return start + newStr + end;
  }
};

// Usage

const result = replace('Hello <username> and bye!', '<username>', 'Marcus');
console.log(result);
