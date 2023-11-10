export default {
    setupFilesAfterEnv: ['<rootDir>/setupTests.cjs'],
    collectCoverage: false,
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
    coverageReporters: ['lcov'],
    coverageDirectory: './coverage/',
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
};
