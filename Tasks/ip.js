// Split string by the first occurrence of separator

'use strict';

const parseIp = ip => ip.split('.').map(item => parseInt(item));

// Usage

const result = parseIp('127.0.0.1');
console.log(result);
