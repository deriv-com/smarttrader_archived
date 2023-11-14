export default {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
    coverageReporters: ['html', 'lcov', 'json'],
    coverageDirectory: './coverage',
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
};
