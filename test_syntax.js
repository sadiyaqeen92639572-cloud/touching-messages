const fs = require('fs');
const ts = require('typescript');
const file = '/media/brice/TradingData/touching-messages/data/i18n.ts';
const data = fs.readFileSync(file, 'utf8');
const sourceFile = ts.createSourceFile('i18n.ts', data, ts.ScriptTarget.Latest, true);

function traverse(node) {
  if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
    // console.log("Object found");
  }
  ts.forEachChild(node, traverse);
}
traverse(sourceFile);
console.log("No syntax errors parsing with TS if it completes?");
