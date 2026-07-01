const fs = require('fs');

const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
let data = fs.readFileSync(file, 'utf8');

// Fix ES block
data = data.replace(
  /(\s*)\}\s*\},(\s*)"valentines-day": \{/,
  "$1}\n      },\n      \"valentines-day\": {"
);

// Fix PT block
data = data.replace(
  /(\s*)\}\s*\},(\s*)"valentines-day": \{/,
  "$1}\n      },\n      \"valentines-day\": {"
);

// Wait, the previous replacement inserted:
// "for-girlfriend": { ... }
//     },
//
//       "valentines-day": {

// Let's use a simpler string replace.
// The bad sequence is:
//       }
//     },
//
//       "valentines-day": {
// We want it to be:
//       },
//       "valentines-day": {

data = data.replace(
  /      \}\n    \},\n\n      "valentines-day": \{/g,
  "      },\n      \"valentines-day\": {"
);

// And we need to close the categories object before messages.
// But wait, the categories object was closed by the original `}` that we matched.
// We removed it from closing categories and put it before `valentines-day`. 
// So now we need to add the closing `},` for categories at the end of the new categories block!
// The new categories end right before `messages: {`

data = data.replace(
  /      \}\n    messages: \{/g,
  "      }\n    },\n    messages: {"
);

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed syntax');
