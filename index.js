const readline = require('node:readline');
const { toRoman } = require('./roman');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Adj meg egy egész számot (1–3999): ', (answer) => {
  try {
    if (!/^-?\d+$/.test(answer.trim())) {
      throw new TypeError('Egész számot adj meg!');
    }
    console.log('Római szám:', toRoman(Number(answer)));
  } catch (error) {
    console.error('Hiba:', error.message);
    process.exitCode = 1;
  }
  rl.close();
});
