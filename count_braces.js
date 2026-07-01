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
  if (open < 0) {
    console.log('Negative braces at line', i+1);
  }
}
console.log('Final open braces:', open);
