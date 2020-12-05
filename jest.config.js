// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    preset: './jest-preset.js',
    verbose: true,
    globals: {
        "BASEPATH": '/cms'
    },
    collectCoverage: true,
    coverageReporters: [
        "text",
        "html",
        "cobertura"
    ],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/src/tests/',
    ],
    moduleDirectories: [
        "node_modules",
        "./"
    ],
};