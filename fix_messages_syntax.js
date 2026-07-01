const fs = require('fs');
const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
let data = fs.readFileSync(file, 'utf8');

// The current bad structure is:
//       "m19": {
//         ...
//       }
//     },
//       "m20": {
//         ...
//       "m24": {
//         ...
//       }
// ,
//     ui: {

// We want it to be:
//       "m19": {
//         ...
//       },
//       "m20": {
//         ...
//       "m24": {
//         ...
//       }
//     },
//     ui: {

// We can do this by finding:
//       }
//     },
//       "m20": {
// and replacing it with:
//       },
//       "m20": {

data = data.replace(
  /      \}\n    \},\n      "m20": \{/g,
  "      },\n      \"m20\": {"
);

// And finding:
//       }
// ,
//     ui: {
// and replacing it with:
//       }
//     },
//     ui: {

data = data.replace(
  /      \}\n,\n    ui: \{/g,
  "      }\n    },\n    ui: {"
);

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed messages syntax');
