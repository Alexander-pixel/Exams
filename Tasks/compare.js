// Compare two dictionaries

'use strict';

const compare = (dict1, dict2) => {
  const keysDict1 = Object.keys(dict1);
  const keysDict2 = Object.keys(dict2);
  if (keysDict1.join('-') !== keysDict2.join('-')) {
    return false;
  } else {
    const valuesDict1 = Object.values(dict1);
    const valuesDict2 = Object.values(dict2);
    if (valuesDict1.join('-') !== valuesDict2.join('-')) {
      return false;
    }
  }
  return true;
};

// Usage

const result = compare({ a: 1, c: 'hello' }, { a: 1, c: 'hello' });
console.log(result);
