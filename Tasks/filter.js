// Filter array by type name

'use strict';

const filter = (arr, type) => {
    const res = [];
    for (const item of arr) {
        if (typeof item === type) {
            res.push(item);
        }
    }
    return res;
};

// Usage

const result = filter([1, 2, 'three', 4, 5, 'six'], 'number');
console.log(result);
