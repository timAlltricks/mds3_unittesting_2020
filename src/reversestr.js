var reverseString = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;
