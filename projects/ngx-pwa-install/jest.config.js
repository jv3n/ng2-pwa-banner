// Jest configuration file, see link for more information
// https://thymikee.github.io/jest-preset-angular/docs/

const esModules = [
  'rxjs',
  '@angular',
  'ngx',
  '@ngneat'
].join('|');

module.exports = {
  preset: 'jest-preset-angular',
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    "^@ngx-pwa-install/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.module.ts'
  ]
};
