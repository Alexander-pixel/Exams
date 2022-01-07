// Get one random element from array

'use strict';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

// Usage

const result = random([123, 456, 789, 222, 333, 444]);
console.log(result);
