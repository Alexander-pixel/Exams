// Generate random integer value in given range

'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Usage

const result = random(1, 9);
console.log(result);
