module.exports = {
  'bail': false,
  'verbose': true,
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  'collectCoverage': true,
  'collectCoverageFrom': ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**', '!webpack.config.js', '!**/__mock__/**', '!**/coverage/**', '!jest.config.js', '!**/dist/**', '!**/src/services/**'],
  'automock': false,
  'resolver': 'jest-webpack-resolver'
}
