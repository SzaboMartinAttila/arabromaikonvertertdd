function toRoman(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError('Egész szám szükséges.');
  }
  if (number < 1 || number > 3999) {
    throw new RangeError('A szám 1 és 3999 között lehet.');
  }

  const symbols = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, symbol] of symbols) {
    const count = Math.floor(number / value);
    result += symbol.repeat(count);
    number %= value;
  }
  return result;
}

module.exports = { toRoman };
