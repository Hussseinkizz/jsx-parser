var acorn = require('acorn');
var jsx = require('acorn-jsx');
const ast = acorn.Parser.extend(jsx()).parse("my(<jsx/>, 'code');");

console.log('AST::', ast);
