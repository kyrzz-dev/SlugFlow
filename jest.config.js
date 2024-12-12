/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testRegex: "(/test/.*|.*\\.test)\\.ts$",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};