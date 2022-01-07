// Convert number to file size in bytes, kb, mb, and gb

'use strict';

const prefixes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];

const getRoundSize = size => {
  if (size === 0) return '0';
  else {
    const exp = Math.floor(Math.log(size) / Math.log(1000));
    return (Math.round(size / (1000 ^ exp)) + ' ' + prefixes[exp]);
  }
};

// Usage

const result = getRoundSize(123456);
console.log(result);
