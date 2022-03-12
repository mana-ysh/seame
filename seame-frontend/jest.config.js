const fs = require('fs');
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports.config = ({ basePath }) => {
  const filepath = path.join(basePath, './tsconfig.json');
  const tsconfig = fs.readFileSync(filepath, 'utf8');
  const { compilerOptions } = JSON.parse(tsconfig);

  return {
    preset: 'ts-jest',
    testPathIgnorePatterns: ["/dist/"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  };
};