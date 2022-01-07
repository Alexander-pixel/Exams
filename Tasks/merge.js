// Merge two dictionaries

'use strict';

const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);

// Usage

const result = mergeObjects({ a: 'uno', b: 'due' }, { c: 'tre' });
console.log(result);
