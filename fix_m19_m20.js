const fs = require('fs');
const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
let data = fs.readFileSync(file, 'utf8');

data = data.replace(
  /      \}\n    \},\n\n      "m20": \{/g,
  "      },\n      \"m20\": {"
);

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed m19/m20 transition');
