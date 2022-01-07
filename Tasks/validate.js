// Validate person name

'use strict';

const isValid = name => {
  if (typeof name !== 'string') return false;
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regex.test(name);
};

// Usage

const result = isValid('Marcus Aurelius');
console.log(result);
