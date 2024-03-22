const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

const jsxInput = fs.readFileSync('input.jsx', 'utf-8');

const ast = acorn.parse(jsxInput, {
  ecmaVersion: 2020,
  sourceType: 'module',
  plugins: {
    jsx: true,
    jsxExpression: true,
  },
});

console.log(JSON.stringify(ast, null, 2));
