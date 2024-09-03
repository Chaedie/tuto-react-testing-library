/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,ts,tsx}", // Include all components
    "!src/components/**/*.{types,stories,constants,test,spec}.{js,ts,tsx}", // Exclude test files
    "!src/index.tsx", // Exclude the index file
    "!src/reportWebVitals.ts", // Exclude the reportWebVitals file
    "!src/**/*.d.ts", // Exclude TypeScript declaration files
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};

module.exports = config;
