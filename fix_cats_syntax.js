const fs = require('fs');
const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
let data = fs.readFileSync(file, 'utf8');

data = data.replace(
  /      \}\n\,\n    messages: \{/g,
  "      }\n    },\n    messages: {"
);

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed categories closing brace');
