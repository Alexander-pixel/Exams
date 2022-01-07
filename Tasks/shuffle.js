// Shuffle an array

'use strict';

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// Usage

const result = shuffle(['a', 'b', 'c', 'd', 'e']);
console.log(result);
