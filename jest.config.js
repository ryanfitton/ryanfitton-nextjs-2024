const nextJest = require("next/jest");
const path = require('path')

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // <= setup file here 
  moduleDirectories: ['node_modules', path.join(__dirname)],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);