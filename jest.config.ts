export default {
  // preset: "babel-jest",
  testEnvironment: "jsdom",
  /**
   * 解决 ReferenceError: Vue is not defined 的问题
   */
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    // "^.+\\.ts$": "babel-jest",
    "^.+\\.[t|j]s(x)?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest", // 支持vue单文件
  },
  moduleFileExtensions: ["js", "jsx", "vue", "ts", "tsx"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 80,
      statements: 80,
    },
  },
  // moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths /* , { prefix: '<rootDir>/' } */),
  /* moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }, */
  testPathIgnorePatterns: ["<rootDir>/__mocks__"],
};
