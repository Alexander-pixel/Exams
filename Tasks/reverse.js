// Reverse dict, exchange key and value

'use strict';

const reverse = dict => {
  const keys = Object.keys(dict);
  for (const key of keys) {
    const value = dict[key];
    dict[value] = key;
    delete dict[key];
  }
  return dict;
};

// Usage

const result = reverse({ a: 'uno', b: 'due', c: 'tre' });
console.log(result);
