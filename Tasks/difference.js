// Find a difference of two dictionaries

'use strict';

const difference = (obj1, obj2) => {
    const res = {};
    for (const key in obj1) {
        if (!(key in obj2)) {
            const value = obj1[key];
            res[key] = value;
        }
    }
    return res;
};

// Usage

const result = difference({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
console.log(result);

