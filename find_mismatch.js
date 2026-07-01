const fs = require('fs');
const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
let data = fs.readFileSync(file, 'utf8');

let open = 0;
let lines = data.split('\n');
for (let i=0; i<lines.length; i++) {
  let line = lines[i];
  for (let char of line) {
    if (char === '{') open++;
    if (char === '}') open--;
  }
  console.log(`Line ${i+1}: ${open} | ${line}`);
}
