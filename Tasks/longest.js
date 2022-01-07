// Find longest string

'use strict';

const longest = arr => arr.sort((item1, item2) => item2.length - item1.length)[0];

// Usage

const result = longest(['Roma', 'Kiev', 'Beijing', 'Barcelona', 'Omsk']);
console.log(result);
