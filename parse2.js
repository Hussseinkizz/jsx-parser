const acorn = require('acorn');
const jsx = require('acorn-jsx');

const jsxInput = `<div id="app">
  <h1 className="title">Hello, React!</h1>
  <p>This is a example of JSX.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <input type="text" value="Initial value" />
  <button onClick={() => console.log('Clicked!')}>Click me</button>
</div>`;

const ast = acorn.parse(jsxInput, {
  ecmaVersion: 2020,
  sourceType: 'module',
  plugins: {
    jsx: true,
    jsxExpression: true,
  },
});

console.log('AST:', JSON.stringify(ast, null, 2));
