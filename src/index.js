const path = require('path');
const fs = require('fs');
const getAST = require('./common/getAST');

const testGetAST = () => {
  const exampleCodePath = path.resolve(__dirname, './exampleCodes/jsx.js');
  // const content = fs.readFileSync(exampleCodePath, 'utf-8');
  const content = require(exampleCodePath);
  console.log('content', content);
  getAST(content);
};

testGetAST();