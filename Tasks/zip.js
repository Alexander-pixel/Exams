// // Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1, arr2) => {
  const res = [];
  let i = 0;
  for (const item of arr2) {
    res.push([arr1[i++], item]);
  }
  return res;
};

// Usage

const result = zip(['Roma', 'Kiev', 'Beijing'], [100, 200, 300]);
console.log(result);
