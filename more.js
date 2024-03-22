const acorn = require('acorn');
const jsx = require('acorn-jsx');
const walk = require('acorn-walk');
const { extend } = require('acorn-jsx-walk');

// setup
const parser = acorn.Parser.extend(jsx());
extend(walk.base);

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

// parse
const ast = parser.parse(jsx, { ecmaVersion: 'latest', sourceType: 'module' });

// analys
walk.simple(ast, {
  JSXText(node) {
    console.log(node.expression);
  },
});
