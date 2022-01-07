// Get month number

'use strict';

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const parseMonth = month => {
  for (let i = 0; i < months.length; i++) {
    if (month.toLowerCase().startsWith(months[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

// Usage

const result = parseMonth('february');
console.log(result);
