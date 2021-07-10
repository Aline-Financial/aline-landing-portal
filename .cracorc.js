const CracoAlias = require("craco-alias");

module.exports = {
    reactScriptsVersion: "react-scripts",
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.extend.json"
            }
        }
    ],
    eslint: {
        mode: "extends",
        configure: () => require("./.eslintrc")
    }
}
