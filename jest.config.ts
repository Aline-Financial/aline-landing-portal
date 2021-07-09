import type {Config} from "@jest/types";

const config: Config.InitialOptions = {
    modulePaths: [
        "src"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "scss",
        "sass",
        "css"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "@test-utils": "<rootDir>/src/utils/test.utils"
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    verbose: true
};

export default config;
