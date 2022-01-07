// Get day number

'use strict';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const parseDay = day => {
  for (let i = 0; i < days.length; i++) {
    if (day.toLowerCase().startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

// Usage

const result = parseDay('Friday');
console.log(result);
