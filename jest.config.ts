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
        "\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
        "\\.(ttf|eot)$": "<rootDir>/mocks/fileMock.js",
        "\\.(png|jpeg|jpg|svg)$": "<rootDir>/mocks/imageMock.js",
        "^@src(.*)$": "<rootDir>/src$1",
        "^@test-utils$": "<rootDir>/src/utils/test.utils",
        "^aline-signup-form$": "<rootDir>/src/modules/SignUpFormComponents",
        "^@images(.*)$": "<rootDir>/src/assets/images$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@config(.*)$": "<rootDir>/src/config$1",
        "^@interfaces$": "<rootDir>/src/interfaces",
        "^@props": "<rootDir>/src/props",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@data(.*)$": "<rootDir>/src/data$1",
        "^@styles(.*)$": "<rootDir>/src/styles$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1",
        "^@api(.*)$": "<rootDir>/src/api$1",
        "^@schemas(.*)$": "<rootDir>/src/schemas"
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    verbose: true
};

export default config;
