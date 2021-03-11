const acorn = require('acorn');

const getAST = (code, options = {}) => {
  const result = acorn.parse(code, options);
  console.log('result', result);
};

module.exports = getAST;
  