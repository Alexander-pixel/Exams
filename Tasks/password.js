// Generate random password

'use strict';

const generatePassword = (alphabet, length) => {
  let res = '';
  for (let i = 0; i < length; i++) {
    const letterIndex = Math.floor(Math.random() * alphabet.length);
    res += alphabet[letterIndex];
  }
  return res;
};

// Usage

const result = generatePassword('abc123', 7);
console.log(result);
