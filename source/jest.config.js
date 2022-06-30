module.exports = {
    moduleFileExtensions: ["js", "json", "ts"],
    testMatch: [
        "<rootDir>/lib/**/*.spec.ts",
    ],
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    testEnvironment: "node",
}
