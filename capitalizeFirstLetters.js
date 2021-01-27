const assert = require('assert');

const capitalizeFirstLetters = (str) => str.split(' ')
                                            .map(e => e.slice(0, 1)
                                            .toUpperCase() + e.substr(1))
                                            .join(' ');

const myStr = 'i am learning TDD'  ;
console.log(capitalizeFirstLetters(myStr))   

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters(''), '');
                                         