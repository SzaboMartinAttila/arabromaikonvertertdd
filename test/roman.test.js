const { toRoman } = require('../roman');

QUnit.module('Arab szám → római szám');

QUnit.test('1, 2, 3', (assert) => {
  assert.strictEqual(toRoman(1), 'I');
  assert.strictEqual(toRoman(2), 'II');
  assert.strictEqual(toRoman(3), 'III');
});

QUnit.test('4 és 5', (assert) => {
  assert.strictEqual(toRoman(4), 'IV');
  assert.strictEqual(toRoman(5), 'V');
});

QUnit.test('9, 14, 58', (assert) => {
  assert.strictEqual(toRoman(9), 'IX');
  assert.strictEqual(toRoman(14), 'XIV');
  assert.strictEqual(toRoman(58), 'LVIII');
});

QUnit.test('Kivonásos alakok és nagy számok', (assert) => {
  assert.strictEqual(toRoman(40), 'XL');
  assert.strictEqual(toRoman(90), 'XC');
  assert.strictEqual(toRoman(400), 'CD');
  assert.strictEqual(toRoman(900), 'CM');
  assert.strictEqual(toRoman(1994), 'MCMXCIV');
  assert.strictEqual(toRoman(3999), 'MMMCMXCIX');
});

QUnit.test('Határértékek és érvénytelen bemenetek', (assert) => {
  assert.throws(() => toRoman(0), RangeError);
  assert.throws(() => toRoman(-1), RangeError);
  assert.throws(() => toRoman(4000), RangeError);
  assert.throws(() => toRoman(1.5), TypeError);
  assert.throws(() => toRoman('10'), TypeError);
  assert.throws(() => toRoman(NaN), TypeError);
});

QUnit.test('Konzolos beolvasás és kiírás', (assert) => {
  const { spawnSync } = require('node:child_process');
  const path = require('node:path');
  const program = path.join(__dirname, '..', 'index.js');

  const valid = spawnSync(process.execPath, [program], {
    input: '1994\n', encoding: 'utf8'
  });
  assert.strictEqual(valid.status, 0);
  assert.ok(valid.stdout.includes('Római szám: MCMXCIV'));

  const invalid = spawnSync(process.execPath, [program], {
    input: '0\n', encoding: 'utf8'
  });
  assert.strictEqual(invalid.status, 1);
  assert.ok(invalid.stderr.includes('Hiba:'));
});
